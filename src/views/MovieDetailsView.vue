<template>
    <img v-if="movie" class="block -top-24 -right-20 -z-10 laptop:absolute laptop:h-[680px] desktop:absolute"
        :src="movie.backdropUrl || movie.posterUrl || undefined" :alt="movie.title" />

    <infoCard v-if="movie" :rating="movie.tmdbRating" :year="movie.releaseYear" :genre="movie.genres"
        :countries="movie.countriesOfOrigin" :length="movie.runtime" :title="movie.title" :subtitle="movie.plot"
        :gapSize="'gap-x-4'" :fontSize="'text-5xl'" :magTop="'mt-4'" />


</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useApiStore } from '@/stores/index'

const api = useApiStore()
const { movieCache } = storeToRefs(api)
const route = useRoute()

const id = Number(route.params.id)

onMounted(async () => {
    await api.fetchMovieById(id)
})

const movie = computed(() => movieCache.value.get(id))

</script>