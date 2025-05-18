<template>
    <section id="topListMovie" class="w-full ">
        <h2 class="text-2xl font-bold text-white mt-10">
            Топ 10 фильмов
        </h2>
        <TopListCard class="mt-16 " />

    </section>
</template>

<script setup lang="ts">
import TopListCard from './Card/topListCard.vue';
</script>