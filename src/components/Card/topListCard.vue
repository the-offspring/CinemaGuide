<template>
    <ul
        class="flex  w-fit tablet:w-full gap-10 tablet:justify-items-center tablet:gap-y-16 tablet:grid tablet:grid-cols-3  laptop:grid-cols-4 desktop:grid-cols-5">
        <li v-for="card in cards" :key="card.id"
            class="item relative rounded-3xl bg-cover bg-center bg-no-repeat border border-white/25"
            :style="{ backgroundImage: `url(${card.posterUrl})` }">
            <span class="sr-only">{{ card.title }}</span>
            <span :class="isTop"
                class="absolute z-10 top-[-12px] left-[-12px] text-main-color text-2xl font-bold px-6 py-2 bg-white rounded-3xl">
                {{ cards.indexOf(card) + 1
                }} </span>
            <RouterLink :to="'/page$'"></RouterLink>
        </li>
    </ul>

</template>

<script lang="ts" setup>
import cards from '@/stores/top.json'
</script>

<style scoped>
.item {
    width: 228px;
    height: 348px;
    box-shadow: 0px 0px 80px 0px #FFFFFF54;
    border: 1px solid #FFFFFF40
}
</style>