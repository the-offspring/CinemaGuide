import type { UserProfile, Movie } from '@/types/api'
import { defineStore } from 'pinia'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cinemaguide.skillbox.cc/',
  withCredentials: false, // куки
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

function toForm(data: Record<string, any>) {
  return new URLSearchParams(data).toString()
}

export const useApiStore = defineStore('api', {
  state: () => ({
    profile: null as null | UserProfile,
    favorites: [] as Movie[],
    genres: [] as string[],
    topMovies: [] as Movie[],
    movieCache: new Map<number, Movie>(),
    genresLoaded: false,
    topMoviesLoaded: false
  }),

  actions: {
    // ---------- AUTH ----------
    async login(email: string, password: string) {
      const response = await api.post('/auth/login', toForm({ email, password }))
      return response.data
    },

    async logout() {
      const response = await api.get('/auth/logout')
      return response.data
    },

    async register(payload: { email: string; password: string; name: string; surname: string }) {
      const response = await api.post('/user', toForm(payload))
      return response.data
    },

    async fetchProfile() {
      const response = await api.get('/profile')
      this.profile = response.data
      return response.data
    },

    // ---------- FAVORITES ----------
    async fetchFavorites() {
      const response = await api.get('/favorites')
      this.favorites = response.data
      return response.data
    },

    async addFavorite(id: string) {
      const response = await api.post('/favorites', toForm({ id }))
      this.profile = response.data
      await this.fetchFavorites()
      return response.data
    },

    async removeFavorite(movieId: number) {
      const response = await api.delete(`/favorites/${movieId}`)
      this.profile = response.data
      await this.fetchFavorites()
      return response.data
    },

    // ---------- MOVIES ----------
    async fetchMovies(params: { count?: number; page?: number; title?: string; genre?: string }) {
      const response = await api.get('/movie', { params })
      return response.data
    },

    async fetchTopMovies() {
      if (this.topMoviesLoaded) return this.topMovies
      const response = await api.get('/movie/top10')
      this.topMovies = response.data
      this.topMoviesLoaded = true
      return response.data
    },

    async fetchGenres() {
      if (this.genresLoaded) return this.genres
      const response = await api.get('/movie/genres')
      this.genres = response.data
      this.genresLoaded = true
      return response.data
    },

    async fetchMovieById(movieId: number) {
      if (this.movieCache.has(movieId)) return this.movieCache.get(movieId)
      const response = await api.get(`/movie/${movieId}`)
      this.movieCache.set(movieId, response.data)
      return response.data
    },

    async fetchRandomMovie() {
      const response = await api.get('/movie/random')
      return response.data
    }
  }
})
