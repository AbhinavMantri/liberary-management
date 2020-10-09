import urls, { requestTypes } from './urls';
import cookie from '../utils/cookie';

const REQUEST_TYPES = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

const publicRequestType = [
    requestTypes.AUTH,
];

const headers = { 'Content-type': 'application/json' };

const request = async (type, config, params) => {
    if(!publicRequestType.includes(type)) {
        const accessToken = cookie.getCookieItem("access-token");
        
        if(!accessToken)
            return Promise.reject(new Response({ reason: "Unauthorized" }, { status: 401 }));
 
        config.headers = {...config.headers, "access-token": accessToken};
    }

    const url = typeof urls[type] === "function" && params ? urls[type](config) : urls[type];
    debugger;
    
    // return Promise.reject("");
    return fetch(`${process.env.REACT_APP_API_URL}${url}`, config).then(res => res.json());
}

const getHeaders = config => ({...headers, ...(config.headers || {})});


export default {
    setHeader: (key, value) => headers[key] = value,
    removeHeader: key => { delete headers[key] },
    get: async (type, config, params) => request(type, {...config, method: REQUEST_TYPES.GET, headers: getHeaders(config)}, params),
    post: async (type, config, params) => request(type, {...config, method: REQUEST_TYPES.POST, headers: getHeaders(config) }, params),
    put: async (type, config, params) => request(type, {...config, method: REQUEST_TYPES.PUT, headers: getHeaders(config) }, params),
    delete: async (type, config, params) => request(type, {...config, method: REQUEST_TYPES.DELETE, headers: getHeaders(config) }, params),
};