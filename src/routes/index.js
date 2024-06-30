//Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routes
const publicRoutes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/following',
        component: Following,
        exact: true,
    },
    {
        path: '/:nickname',
        component: Profile,
        exact: true,
    },
    {
        path: '/upload',
        component: Upload,
        exact: true,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        component: Search,
        exact: true,
        layout: null,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
