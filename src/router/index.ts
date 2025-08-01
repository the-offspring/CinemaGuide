import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GenreView from '../views/GenreView.vue'
import MovieDetailsView from '../views/MovieDetailsView.vue'
// import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/genres',
      name: 'genres',
      component: GenreView
      // Optional: for subcategories you could add children routes
      // children: [
      //   {
      //     path: ':subcategory', // e.g., /genres/action or /genres/comedy
      //     name: 'genre-subcategory',
      //     component: GenreView
      //   }
      // ]
    },
    {
      path: '/movie/:id/:name',
      name: 'movie-details',
      component: MovieDetailsView,
      props: true // This will pass route params as props to the component
    }
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   component: ProfileView,
    //   meta: { requiresAuth: true }
    // },
    // // Optional: 404 catch-all route
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('../views/NotFoundView.vue')
    // }
  ]
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = false // Replace with your actual auth check
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' })
  } else {
    next()
  }
})
export default router
