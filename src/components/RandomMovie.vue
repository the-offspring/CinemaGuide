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
                <MainBtn :BG="2" :Text="'О фильме'" :propStyl="'px-12'" />
                <MainBtn :BG="2" :propStyl="'px-6'">
                    <HeartIcon class="size-6 text-white" />
                </MainBtn>
                <MainBtn :BG="2" :propStyl="'px-6'" :clik="randomMovie">
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
import { computed } from 'vue';

let randomMovie = computed(() => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    let i = 0
    console.log(i++);

    return cards[randomIndex];
});
</script>