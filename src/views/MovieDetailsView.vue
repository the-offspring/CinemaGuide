<template>
    <section id="randomMovie" class="w-full flex items-center laptop:h-[680px] relative">
        <img class="block -top-24 -right-20 -z-10 laptop:absolute laptop:h-[680px] desktop:absolute "
            :src="randomMovie.backdropUrl || randomMovie.posterUrl || undefined" :alt="randomMovie.title">
        <div>
            <infoCard :rating="randomMovie.tmdbRating" :year="randomMovie.releaseYear" :genre="randomMovie.genres"
                :countries="randomMovie.countriesOfOrigin" :length="randomMovie.runtime" :title="randomMovie.title"
                :subtitle="randomMovie.plot" :gapSize="'gap-x-4'" :fontSize="'text-5xl'" :magTop="'mt-4'" />
            <div class="flex gap-2 mt-[60px]">
                <MainBtn :BG="1" :Text="'Трейлер'" :propStyl="'px-12'" />
                <MainBtn :BG="2" :propStyl="'px-6'">
                    <HeartIcon class="size-6 text-white hover:" />
                </MainBtn>
            </div>
        </div>

    </section>
</template>

<script lang="ts">
import { HeartIcon } from '@heroicons/vue/24/solid';

</script>