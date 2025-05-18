<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../store';
import { ref, computed } from 'vue';

const store = useMainStore();
const movie = ref(null); // получить данные фильма
const isFavorite = computed(() => store.favorites.includes(movie.value.id));
</script>