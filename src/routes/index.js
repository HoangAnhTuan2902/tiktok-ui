//Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes';

// Public routes
const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
        exact: true,
    },
    {
        path: routesConfig.following,
        component: Following,
        exact: true,
    },
    {
        path: routesConfig.nickname,
        component: Profile,
        exact: true,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        exact: true,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.search,
        component: Search,
        exact: true,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
