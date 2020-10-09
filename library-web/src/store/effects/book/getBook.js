import { BookService } from "../../../services";
import { bookAction, appAction } from '../../actions';
import { bookActionType } from "../../actions/book";
import { appActionType } from "../../actions/app";
import constants from "../../../constants";

export default async (args, dispatch) => {
    try {
        const book = await BookService.getBook(args);
        bookAction(bookActionType.SET_BOOK, { data: book })(dispatch);
    } catch(err) {
        appAction(appActionType.SET_MESSAGE, { type: constants.MESSAGE_TYPE.ERROR, content: err.message })(dispatch);
        console.log(err.message);
    }

    return Promise.resolve("Done!");
}