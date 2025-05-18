<template>
    <div class="w-full h-28 py-10 gap-6 inline-flex">
        <div class="grow shrink basis-0 h-10 justify-start items-center gap-3 flex">
            <div class="text-white text-lg font-bold leading-normal">LLC «Мультимедиа Визион»</div>
            <div class="w-6 h-6 p-0.5 justify-center items-center flex"></div>
            <div class="text-white/70 text-lg font-normal leading-normal">Все права защищены </div>
            <div class="grow shrink basis-0 h-9 justify-end items-center gap-6 flex">
                <div v-for="item in social"
                    class="w-9 h-9 rounded-lg border border-white/80 justify-center items-center flex">
                    <img :src="item.src" :alt="item.placeholder" />
                </div>
            </div>

            <!-- <div class="w-9 h-9 pt-2.5 pb-2 rounded-lg border border-white/80 justify-center items-center flex">
                    <div class="grow shrink basis-0 self-stretch relative">
                        <img class="w-2.5 h-2.5 left-[0.57px] top-0 absolute" src="https://via.placeholder.com/9x9" />
                    </div>
                </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let social = ref<Array<
    {
        src: string;
        placeholder: string
    }
>>([
    {
        src: 'Vk.png',
        placeholder: 'Мы в VK'
    },
    {
        src: 'youtube.png',
        placeholder: 'Мы на YouTube'
    },
    {
        src: 'ok.png',
        placeholder: 'Мы в Ok'
    },
    {
        src: 'telegram.png',
        placeholder: 'Мы в Telegram'
    }
]);

</script>