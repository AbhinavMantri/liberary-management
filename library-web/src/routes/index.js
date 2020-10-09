import React from 'react';

export default {
    Home: React.lazy(() => import("../pages/home")),
    BOOK: React.lazy(() => import("../pages/book")),
    LOGIN: React.lazy(() => import("../pages/login")),
};