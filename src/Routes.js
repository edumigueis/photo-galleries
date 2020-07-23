import Landing from './components/landing/Landing.vue';
import NotFound from './components/not-found/NotFound.vue';
import Galleries from './components/galleries/Galleries.vue';
import RowMasonry from './components/row-masonry/RowMasonry.vue';
import Grid from './components/grid/Grid.vue';
import Masonry from './components/masonry/Masonry.vue';
import NoGutterGrid from './components/no-gutter-grid/NoGutterGrid.vue';

export const routes = [
    { path: '/', component: Landing, titulo: 'Photo Galleries'},
    { path: '/galleries', component: Galleries, titulo: 'Photo Galleries'},
    { path: '/row-masonry', component: RowMasonry, titulo: 'Photo Galleries'},
    { path: '/grid', component: Grid, titulo: 'Photo Galleries'},
    { path: '/masonry', component: Masonry, titulo: 'Photo Galleries'},
    { path: '/no-gutter/grid', component: NoGutterGrid, titulo: 'Photo Galleries'},
    { path: '*', component: NotFound, titulo: 'N O T  F O U N D', meta: { transition: 'zoom' }  }
]


