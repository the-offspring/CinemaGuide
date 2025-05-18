<template>

    <div v-if="response === 200" class="Wrapper flex-col justify-start items-center gap-6 inline-flex">
        <DialogTitle>
            <h3 class="Title text-black text-2xl font-bold font-['Play'] leading-loose">Регистрация завершена</h3>
        </DialogTitle>
        <p class="Title self-stretch text-center text-black text-lg font-normal font-['Play'] leading-normal">
            Используйте вашу электронную почту для входа</p>
        <MainBtn :BG="1" :Text="'Войти'" class="w-full" />
    </div>
    <div v-else class="w-full">
        <DialogTitle>
            <h3 class="text-black text-2xl font-bold font-['Play'] leading-loose text-center mb-3">Регистрация</h3>
        </DialogTitle>
        <form pr class="self-stretch flex-col justify-start items-center gap-6 flex">
            <div class="w-full flex flex-col gap-3">
                <input name="email" type="email" placeholder="Электронная почта" autocomplete="email"
                    class="basis-0 text-black/40 text-lg font-normal font-['Play'] leading-normal self-stretch p-4 bg-white rounded-lg border border-black/40 justify-start items-center gap-3 inline-flex">
                <input name="first name" type="text" placeholder="Имя" autocomplete="given-name"
                    class="basis-0 text-black/40 text-lg font-normal font-['Play'] leading-normal self-stretch p-4 bg-white rounded-lg border border-black/40 justify-start items-center gap-3 inline-flex">
                <input name="last name" type="text" placeholder="Фамилия" autocomplete="family-name"
                    class="basis-0 text-black/40 text-lg font-normal font-['Play'] leading-normal self-stretch p-4 bg-white rounded-lg border border-black/40 justify-start items-center gap-3 inline-flex">
                <input name="password" type="password" placeholder="Пароль" autocomplete="new-password"
                    class="basis-0 text-black/40 text-lg font-normal font-['Play'] leading-normal self-stretch p-4 bg-white rounded-lg border border-black/40 justify-start items-center gap-3 inline-flex">
                <input name="repet password" type="password" placeholder="Подтвердите пароль"
                    autocomplete="new-password"
                    class="basis-0 text-black/40 text-lg font-normal font-['Play'] leading-normal self-stretch p-4 bg-white rounded-lg border border-black/40 justify-start items-center gap-3 inline-flex">
            </div>
            <MainBtn :BG="1" :Text="'Создать аккаунт'" class="w-full" @click="response = 200" />
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DialogTitle } from '@headlessui/vue'
import MainBtn from '../button/MainBtn.vue';

const response = ref<Number>()
</script>