import Landing from './components/landing/Landing.vue';
import NotFound from './components/not-found/NotFound.vue';

export const routes = [
    { path: '/', component: Landing, titulo: 'Photo Galleries'},
    { path: '*', component: NotFound, titulo: 'N O T  F O U N D', meta: { transition: 'zoom' }  }
]


