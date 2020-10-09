import cookie from 'cookie';

export default {
    createCookie: function(sKey, sValue, vEnd, sPath = '/', sDomain = window.location.hostname, bSecure = false) {
        if (!sKey || /^(?:expires|max-age|path|domain|secure)$/.test(sKey)) {
          return;
        }
        let sExpires = '';
        if (vEnd) {
          switch (typeof vEnd) {
            case 'number':
              sExpires = `; max-age=${vEnd}`;
              break;
            case 'string':
              sExpires = `; expires=${vEnd}`;
              break;
            case 'object':
              if (vEnd.hasOwnProperty('toGMTString')) {
                sExpires = `; expires=${vEnd.toGMTString()}`;
              }
              break;
            default:
                break;  
          }
        }
        document.cookie = `${escape(sKey)}=${escape(sValue)}${sExpires}${sDomain ? `; domain=${sDomain}` : ''}${sPath ? `; path=${sPath}` : ''}${
          bSecure ? '; secure' : ''
        }`;
    },
    getCookieItem: function(key) {
        const cookies = cookie.parse(document.cookie);
        return cookies[key];
    },
    setCookieItem: function({key, value, time }) {
        this.createCookie(key, value, time || 60 * 60);
    },
    deleteAllCookies: function() {
        const cookies = document.cookie.split(';');
      
        for (const cookie of cookies) {
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=${window.location.hostname};path=/`;
        }
    }
};