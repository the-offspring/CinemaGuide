<template>
    <div class="relative group">
        <RouterLink :to="to" class="text-white text-2xl font-normal leading-loose">
            <slot />
        </RouterLink>
        <span
            class="absolute left-0 -bottom-0.5 h-0.5 bg-fuchsia-500 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"
            :class="{ 'scale-x-100': isActive }" />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{ to: string }>()
const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>
