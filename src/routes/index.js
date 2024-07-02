//Layout
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import config from '~/config';

// Public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        exact: true,
    },
    {
        path: config.routes.following,
        component: Following,
        exact: true,
    },
    {
        path: config.routes.nickname,
        component: Profile,
        exact: true,
    },
    {
        path: config.routes.upload,
        component: Upload,
        exact: true,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        exact: true,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
