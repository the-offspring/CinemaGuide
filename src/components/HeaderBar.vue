<template>
    <div class="w-screen h-24 py-6 tablet:px-20 bg-black/50 backdrop-blur-[20px] justify-center items-center">
        <div class="h-12 justify-between items-center gap-20 flex">
            <div class="h-8 text-5xl font-extrabold justify-center items-center flex">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-main-color to-accent-color">
                    CinemaGuide
                </span>
            </div>
            <div class="h-12 justify-start items-center gap-10 flex">
                <div class="py-2 border-b border-fuchsia-500 justify-start items-center gap-2 flex">
                    <RouterLink to="/" class="text-white text-2xl font-normal leading-loose">Главная
                    </RouterLink>
                </div>
                <div class="py-2 justify-start items-center gap-2 flex">
                    <RouterLink to="/genre" class="text-white text-2xl font-normal leading-loose">Жанры
                    </RouterLink>
                </div>
                <div class="h-12 p-4 bg-neutral-700 rounded-lg justify-start items-center gap-3 flex">
                    <span class="sr-only">Строка поиска</span>
                    <div class="w-6 h-6 pl-0.5 pr-[1.69px] pt-0.5 pb-[1.69px] justify-center items-center flex">
                        <MagnifyingGlassIcon class="text-white/50" />
                    </div>
                    <input type="text" placeholder="Поиск"
                        class="bg-transparent outline-0 text-white/50 text-lg font-normal leading-normal">

                </div>
            </div>
            <div class="py-2 justify-start items-center gap-2 flex">
                <button @click="isOpen = !isOpen" class="text-white text-2xl font-normal leading-loose">
                    Войти
                    <span class="sr-only">Кнопка войти</span>

                </button>
            </div>
        </div>
    </div>
    <TransitionRoot appear :show="isOpen === true" as="template">
        <Dialog as="div" @close="!isOpen" class="relative z-10">
            <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
                leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-black/25" />

            </TransitionChild>

            <div class="fixed inset-0 overflow-y-auto">
                <div class="flex min-h-full items-center justify-center p-4 text-center">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
                        enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
                        leave-to="opacity-0 scale-95">
                        <DialogPanel
                            class="w-full max-w-md transform rounded-2xl bg-white px-10 pt-[64px] pb-[32px] text-left align-middle shadow-xl transition-all">
                            <button type="button" @click="isOpen = !isOpen"
                                class="absolute top-0 -right-[4rem] bg-white rounded-full p-4 ">
                                <XMarkIcon class="w-6 " />
                            </button>
                            <MainWind />
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import MainWind from './Auth/MainWind.vue'

let isOpen = ref<Boolean>(false)

let serchText = ref<String>('')

computed(() => {
    console.log(isOpen);

})

function serchList() {
    return
}
</script>
