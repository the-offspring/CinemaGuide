<template>
    <form class="self-stretch flex-col justify-start items-center gap-6 flex">
        <div class="self-stretch flex-col justify-start items-center gap-3 flex">
            <input name="email" type="email" placeholder="Электронная почта" autocomplete="email"
                class="grow basis-0 text-black/40 text-lg font-normal font-['Play'] leading-normal self-stretch p-4 bg-white rounded-lg border border-black/40">
            <input name="password" type="password" placeholder="Пароль" autocomplete="current-password"
                class="grow basis-0 text-black/40 text-lg font-normal font-['Play'] leading-normal self-stretch p-4 bg-white rounded-lg border border-black/40">
        </div>
        <MainBtn :BG="1" :Text="'Войти'" class="w-full" />
    </form>
</template>

<script setup lang="ts">
import MainBtn from '../button/MainBtn.vue'
</script>