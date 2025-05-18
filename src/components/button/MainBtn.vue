<template>
    <button class="py-4 text-white rounded-3xl flex items-center justify-center gap-2" :class="styleColor, propStyl">
        <slot :class="slotStyle, 'text-inherit hover:text-inherit'" />
        {{ Text }}
    </button>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
    BG: number;
    Text?: string;
    slotStyle?: string;
    propStyl?: string;
/*     clickAction?: void;
 */}>();

const styleColor = computed(() => {
    return props.BG === 1
        ? 'bg-indigo-500 disabled:bg-violet-200 disabled:text-white/50 hover:bg-indigo-400'
        : 'bg-neutral-700 border border-black/40 disabled:bg-neutral-500 disabled:text-white/50 hover:bg-white hover:text-black'
})

</script>
