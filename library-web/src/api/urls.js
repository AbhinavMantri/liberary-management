export const requestTypes = {
    GET_BOOKS: 'GET_BOOKS',
    GET_BOOK: 'GET_BOOK',
    GET_FAVOURITES: 'GET_FAVOURITES',
    GET_READ_HISTORY: 'GET_READ_HISTORY',
    MARK_READ: 'MARK_READ',
    AUTH: 'AUTH',
    ADD_REVIEW: 'ADD_REVIEW',
};

const urls = {
    LOGIN: '/users/auth',
    BOOK: '/books',
    FAVOURITES: '/users/favourites',
    HISTORY: '/users/read-history',
    REVIEW: '/reviews',
};
 
export default {
    AUTH: urls.LOGIN,
    GET_BOOKS: urls.BOOK,
    GET_BOOK: config => `${urls.BOOK}/${config.params.id}`,
    GET_FAVOURITES: urls.FAVOURITES,
    GET_READ_HISTORY: urls.HISTORY,
    MARK_READ: urls.HISTORY,
    ADD_REVIEW: config => `${urls.BOOK}/${config.params.id}${urls.REVIEW}`,
};
