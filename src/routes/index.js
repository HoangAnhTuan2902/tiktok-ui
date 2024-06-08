//Layout
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

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
        path: '/profile',
        component: Profile,
        exact: true,
    },
    {
        path: '/upload',
        component: Upload,
        exact: true,
        layout: HeaderOnly,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
