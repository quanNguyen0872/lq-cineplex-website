import config from '~/config';

// Layouts

// Pages
import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import Theater from '~/pages/Theater';
import CinemaCorner from '~/pages/CinemaCorner';
import EventCine from '~/pages/EventCine';

// Public routes
const publicRoutes = [
    { path: config.routes.trangchu, component: Home },
    { path: config.routes.phim, component: Movie },
    { path: config.routes.rap, component: Theater },
    { path: config.routes.gocdienanh, component: CinemaCorner },
    { path: config.routes.sukien, component: EventCine },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
