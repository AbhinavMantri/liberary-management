import api from '../../api';
import { requestTypes } from '../../api/urls';

export default {
    getBooks: async function() { 
        return api.get(requestTypes.GET_BOOKS, {});
    },
    getBook: async function(id) {
        return api.get(requestTypes.GET_BOOK, {}, { id });
    },
    addReview: async function({review, id}) {
        return api.post(requestTypes.ADD_REVIEW, { body: JSON.stringify(review) }, { id });
    }
};