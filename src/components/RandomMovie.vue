<template>
    <section id="randomMovie" class="w-full flex flex-col items-center lg:flex-row lg:h-[680px]  relative">
        <!-- Skeleton until movie is loaded -->
        <template v-if="!randomMovie">
            <div class="relative w-full h-[500px] rounded-3xl overflow-hidden bg-gray-700/30 animate-pulse">
                <div
                    class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            </div>
        </template>

        <!-- Movie is ready -->
        <template v-else>
            <img class="lg:-top-24 lg:-right-20 lg:-z-10 lg:absolute lg:h-[680px] xl:absolute transition-all duration-1000 ease-in-out"
                :src="randomMovie.backdropUrl || randomMovie.posterUrl || ''" :alt="randomMovie.title" :class="[
                    isVisible ? 'opacity-100 scale-100 -right-20' : 'opacity-0 scale-87 -right-1/2',
                ]" loading="lazy" />

            <div :class="[
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-85',
                'transition-all duration-1000 ease-in-out delay-200',
            ]">
                <infoCard :rating="randomMovie.tmdbRating" :year="randomMovie.releaseYear" :genre="randomMovie.genres"
                    :countries="randomMovie.countriesOfOrigin" :length="randomMovie.runtime" :title="randomMovie.title"
                    :subtitle="randomMovie.plot" :gapSize="'gap-x-4'" :fontSize="'text-5xl'" :magTop="'mt-4'" />

                <div class="flex gap-2 mt-[60px]">
                    <MainBtn :BG="1" :Text="'Трейлер'" :propStyl="'px-12'" />
                    <MainBtn :BG="2" :Text="'О фильме'" :propStyl="'px-12'" />
                    <MainBtn :BG="2" :propStyl="'px-6 hover:text-black hover:border-none'">
                        <HeartIcon class="size-6" />
                    </MainBtn>
                    <MainBtn :BG="2" :propStyl="'px-6 hover:text-black hover:border-none'" @click="updateRandomMovie">
                        <ArrowPathIcon class="size-6" />
                    </MainBtn>
                </div>
            </div>
        </template>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useApiStore } from '@/stores/index'

import MainBtn from './UI/button/MainBtn.vue'
import infoCard from './Card/infoCard.vue'
import { HeartIcon, ArrowPathIcon } from '@heroicons/vue/24/solid'

const api = useApiStore()
const { topMovies } = storeToRefs(api)

const randomMovie = ref()
const isVisible = ref(false)

onMounted(async () => {
    if (!api.topMoviesLoaded || topMovies.value.length === 0) {
        await api.fetchTopMovies()
    }

    if (topMovies.value.length > 0) {
        randomMovie.value = pickRandom(topMovies.value)
        isVisible.value = true
    }
})

function updateRandomMovie() {
    if (topMovies.value.length === 0) return
    isVisible.value = false

    setTimeout(() => {
        randomMovie.value = pickRandom(topMovies.value)
        isVisible.value = true
    }, 1000)
}

function pickRandom(array: any[]) {
    return array[Math.floor(Math.random() * array.length)]
}
</script>

<style scoped>
@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}

.animate-shimmer {
    animation: shimmer 1.5s infinite linear;
    background-size: 200% 100%;
}
</style>
