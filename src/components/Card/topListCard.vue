<template>
    <ul
        class="flex w-fit tablet:w-full gap-10 tablet:justify-items-center tablet:gap-y-16 tablet:grid tablet:grid-cols-3 laptop:grid-cols-4 desktop:grid-cols-5">
        <template v-if="!isLoading">
            <li v-for="card in topMovies" :key="card.id"
                class="item relative rounded-3xl bg-cover bg-center bg-no-repeat border border-white/25"
                :style="{ backgroundImage: `url(${card.posterUrl})` }">
                <span class="sr-only">{{ card.title }}</span>
                <span
                    class="absolute z-10 top-[-12px] left-[-12px] text-main-color text-2xl font-bold px-6 py-2 bg-white rounded-3xl">
                    {{ topMovies.indexOf(card) + 1 }}
                </span>
                <RouterLink :to="`/movie/${card.id}`" class="absolute inset-0 z-20" />
            </li>
        </template>

        <!-- Skeletons while loading -->
        <template v-else>
            <li v-for="n in 10" :key="n" class="item animate-pulse bg-gray-300/20 rounded-3xl border border-white/25">
            </li>
        </template>
    </ul>
</template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useApiStore } from '@/stores/index'



const api = useApiStore()
const { topMovies } = storeToRefs(api)
const isLoading = ref(true)

onMounted(async () => {
    isLoading.value = true
    if (!api.topMoviesLoaded) {
        await api.fetchTopMovies()
        isLoading.value = false
    }
})
</script>


<style scoped>
.item {
    width: 228px;
    height: 348px;
    box-shadow: 0px 0px 80px 0px #FFFFFF54;
    border: 1px solid #FFFFFF40
}
</style>