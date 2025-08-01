<template>
    <form @submit.prevent="onSubmit" class="self-stretch w-full flex-col justify-start items-center gap-6 flex">
        <div class="w-full flex-col justify-start items-center gap-3 flex">
            <!-- Email -->
            <div class="w-full">
                <input v-model="email" name="email" type="email" placeholder="Электронная почта" autocomplete="email"
                    class="w-full text-black/80 text-lg font-normal font-['Play'] leading-normal p-4 bg-white rounded-lg border transition-colors"
                    :class="emailError ? 'border-red-500' : 'border-black/40 focus:border-black'" />
                <p v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</p>
            </div>

            <!-- Password -->
            <div class="w-full">
                <input v-model="password" name="password" type="password" placeholder="Пароль"
                    autocomplete="current-password"
                    class="w-full text-black/80 text-lg font-normal font-['Play'] leading-normal p-4 bg-white rounded-lg border transition-colors"
                    :class="passwordError ? 'border-red-500' : 'border-black/40 focus:border-black'" />
                <p v-if="passwordError" class="text-red-500 text-sm mt-1">{{ passwordError }}</p>
            </div>
        </div>
        <p v-if="loginError" class="text-red-500 text-sm mt-1">{{ loginError }}</p>
        <MainBtn :BG="1" :Text="loading ? 'Вход...' : 'Войти'" :disabled="loading" class="w-full" />
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MainBtn from '../UI/button/MainBtn.vue'

// Импорт метода логина
import { useApiStore } from '@/stores/index' // или '@/services/auth' если без Pinia

// Состояния формы
const email = ref('')
const password = ref('')

const emailError = ref('')
const passwordError = ref('')
const loginError = ref('')
const loading = ref(false)

const router = useRouter()
const authStore = useApiStore()

function validate(): boolean {
    emailError.value = ''
    passwordError.value = ''
    loginError.value = ''

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let valid = true

    if (!email.value) {
        emailError.value = 'Введите email'
        valid = false
    } else if (!emailRegex.test(email.value)) {
        emailError.value = 'Некорректный email'
        valid = false
    }

    if (!password.value) {
        passwordError.value = 'Введите пароль'
        valid = false
    }

    return valid
}

async function onSubmit() {
    if (!validate()) return

    loading.value = true

    try {
        const user = await authStore.login(email.value, password.value)
        console.log('Успешный вход:', user)

        // Можно сохранить токен или вызвать `authStore.setUser(user)`
        // Перенаправление:
        router.push('/') // или '/' — на главную

        // Очистка формы:
        email.value = ''
        password.value = ''
    } catch (err: any) {
        loginError.value = err?.response?.status === 400 ? 'Неверный email или пароль' : 'Ошибка входа. Попробуйте позже'
    } finally {
        loading.value = false
    }
}
</script>