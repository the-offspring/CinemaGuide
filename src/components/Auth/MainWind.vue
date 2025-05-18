<template>
    <div class="w-full flex flex-col items-center gap-2.6">
        <div class="w-44 h-6 justify-center items-center inline-flex mb-10">
            <img src="../../assets/img/logo.svg" alt="">
        </div>

        <div class="w-full bg-white rounded-3xl flex-col items-center gap-6 inline-flex">
            <AuthWind v-if="togle" />
            <RegistWind v-else :status />

            <button @click="togle = !togle"
                class="text-black text-lg font-bold font-['Play'] bg-transparent outline-none leading-normal">{{
                togle
                    ? 'Регистрация' : 'У меня есть пароль' }}</button>

        </div>
    </div>
    <!-- Сделать вместо прямой интеграции гибкость через <slot/> -->
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AuthWind from './AuthWind.vue';
import RegistWind from './RegistWind.vue';

const togle = ref<boolean>(true)
</script>