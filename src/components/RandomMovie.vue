<template>
    <section id="randomMovie" class="w-full flex items-center laptop:h-[680px] relative">

        <img class="block -top-24 -right-20 -z-10 laptop:absolute laptop:h-[680px] desktop:absolute "
            :src="randomMovie.backdropUrl || randomMovie.posterUrl || ''" :alt="randomMovie.title"
            :class="[isVisible ? 'opacity-100 scale-100 -right-20' : 'opacity-0 scale-87 -right-1/2', 'transition-all duration-1000 ease-in-out ']">
        <div :class="[isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-85',
            'transition-all duration-1000 ease-in-out delay-200'
        ]">
            <infoCard :rating="randomMovie.tmdbRating" :year="randomMovie.releaseYear" :genre="randomMovie.genres"
                :countries="randomMovie.countriesOfOrigin" :length="randomMovie.runtime" :title="randomMovie.title"
                :subtitle="randomMovie.plot" :gapSize="'gap-x-4'" :fontSize="'text-5xl'" :magTop="'mt-4'" />
            <div class="flex gap-2 mt-[60px]">
                <MainBtn :BG="1" :Text="'Трейлер'" :propStyl="'px-12'" />
                <MainBtn :BG="2" :Text="'О фильме'" :propStyl="'px-12'" />
                <MainBtn :BG="2" :propStyl="'px-6'">
                    <HeartIcon class="size-6 text-white" />
                </MainBtn>
                <MainBtn :BG="2" :propStyl="'px-6'" @click="updateRandomMovie">
                    <ArrowPathIcon class="size-6 text-white" />
                </MainBtn>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">
import cards from '@/stores/top.json'
import MainBtn from './button/MainBtn.vue';
import infoCard from './Card/infoCard.vue';
import { HeartIcon, ArrowPathIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const randomMovie = ref(cards[0]);
const isVisible = ref(true);

function updateRandomMovie() {
    if (cards.length === 0) return;
    isVisible.value = false
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        randomMovie.value = cards[randomIndex];

        isVisible.value = true
    }, 1000);
}
// function timerRandomMovie() {
// }
// beforeMount(() => {
//     // timerRandomMovie()
//     setInterval(() => {
//         updateRandomMovie()
//     }, 3000)
// })
</script>