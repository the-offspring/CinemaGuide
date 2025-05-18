<template>
    <div class="max-w-[600px]">
        <div class="flex flex-wrap items-center" :class="gapSize">
            <div class="rounded-2xl px-3 py-[0.12rem] inline-flex items-center gap-1 text-white text-lg font-bold"
                :class="ratingBgClass">
                <StarIcon class="size-4" />
                <span>
                    {{ rating }}
                </span>
            </div>
            <span v-if="year" class="text-white/70 tablet:text-lg">
                {{ year }}
            </span>
            <span v-if="genre" class="text-white/70 tablet:text-lg">
                {{ genre.reduce((acc, value) => acc + ', ' + value) }}
            </span>
            <span v-if="countries?.length !== 0" class="text-white/70 tablet:text-lg">
                {{ countries }}
            </span>
            <span v-if="length" class="text-white/70 text-lg">
                {{ formattedLength }}
            </span>
        </div>
        <h1 :class="fontSize, magTop" class="text-white font-bold">
            {{ title }}
        </h1>
        <p v-if="subtitle" class="text-white/70 text-lg mt-4">
            {{ subtitle }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { StarIcon } from '@heroicons/vue/24/solid';

const props = defineProps<{
    rating?: number;
    year?: number;
    genre?: Array<string>;
    countries?: Array<string>;
    length?: number;
    title?: string;
    subtitle?: string;
    poster?: string;
    fontSize: string;
    magTop: string;
    gapSize: string;
}>();

const formattedLength = computed(() => {
    if (props.length) {

        return props.length <= 60
            ? `${props.length} м`
            : `${Math.floor(props.length / 60)} ч ${props.length % 60} м`;
    }
});
const ratingBgClass = computed(() => {
    if (props.rating) {
        if (props.rating >= 10) return 'bg-yellow-500'; // золотой цвет
        if (props.rating >= 7) return 'bg-green-500'; // зеленый цвет
        if (props.rating >= 5) return 'bg-gray-500'; // серый цвет
        return 'bg-red-500'; // красный цвет
    }
});

</script>

<style scoped>
.rait {
    display: flex;
}
</style>