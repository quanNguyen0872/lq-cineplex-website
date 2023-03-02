import Home from '~/pages/Home';
import Movie from '~/pages/Movie';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/movie', component: Movie },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
