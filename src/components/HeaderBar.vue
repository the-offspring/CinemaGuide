<template>
    <div class="h-24 py-7 px-9 sm:px-20 bg-black/50 backdrop-blur-[20px] justify-items-center items-center">
        <div class="w-full h-12 justify-between items-center gap-20 flex">
            <div class="h-8 text-5xl font-extrabold justify-center items-center flex">
                <span
                    class="text-4xl lg:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-main-color to-accent-color">
                    CinemaGuide
                </span>

            </div>
            <div class="flex-grow flex items-center gap-6">
                <div class="flex gap-6">
                    <NavLink v-for="link in navLinks" :key="link.to" :to="link.to" :isActive="isActive(link.to)">
                        {{ link.name }}
                    </NavLink>
                </div>

                <div class="flex items-center bg-neutral-700 rounded-lg px-4 py-2 ml-10 w-full max-w-md">
                    <MagnifyingGlassIcon class="w-5 h-5 text-white/50" />
                    <input type="text" placeholder="Поиск"
                        class="ml-2 bg-transparent outline-none text-white/50 placeholder-white/50 text-lg flex-1" />
                </div>
            </div>

            <div class="py-2 justify-start items-center gap-2 flex">
                <button v-if="!profile" @click="isOpen = !isOpen" class="text-white text-2xl font-normal leading-loose">
                    Войти
                    <span class="sr-only">Кнопка войти</span>

                </button>
                <RouterLink v-else :to="`/profile`" class="text-white text-2xl font-normal leading-loose">
                    {{ profile.name }}
                    <span class="sr-only">Профиль пользователя</span>
                </RouterLink>
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
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useApiStore } from '@/stores/index'
import { computed, ref } from 'vue';
import NavLink from './UI/button/NavLink.vue';

import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'

import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import MainWind from './Auth/MainWind.vue'

const api = useApiStore()
const { profile } = storeToRefs(api)
const isOpen = ref<Boolean>(false)

const navLinks = [
    { name: 'Главная', to: '/' },
    { name: 'Жанры', to: '/genre' },
]


let serchText = ref<String>('')


const route = useRoute()

function isActive(path: string) {
    return route.path === path
}

function serchList() {
    return
}
</script>
