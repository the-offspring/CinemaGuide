export interface UserProfile {
  email: string
  name: string
  surname: string
  favorites: string[]
}

export interface Movie {
  id: number
  title: string
  genres: string[]
  cast: string[]
  director: string
  posterUrl: string
  plot: string
  releaseDate: string
  tmdbRating: number
  runtime: number
  [key: string]: any
}
