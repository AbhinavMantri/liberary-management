import api from '../../api';
import { requestTypes } from '../../api/urls';
import cookie from '../../utils/cookie';

export default {
    login: async function(data) { 
        const user = await api.post(requestTypes.AUTH, { body: JSON.stringify(data) });
        
        if(user && user.token) {
            cookie.setCookieItem({key: "access-token", value: user.token, time: 1 * 60 * 60 });
            cookie.setCookieItem({key: "email", value: data.email, time: 1 * 60 * 60 });
        }

        return user;
    },
    getFavourite: async function() {
        return api.get(requestTypes.GET_FAVOURITES, {});
    },
    getReadHistory: async function() {
        return api.get(requestTypes.GET_READ_HISTORY, {});
    },
    markRead: async function(id) {
        return api.post(requestTypes.GET_READ_HISTORY, { params: { id } });
    }, 
};