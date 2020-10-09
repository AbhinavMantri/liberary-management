import { BookService } from "../../../services";
import { bookAction, appAction } from '../../actions';
import { bookActionType } from "../../actions/book";
import { appActionType } from "../../actions/app";
import constants from "../../../constants";

export default async (args, dispatch) => {
    try {
        const review = await BookService.addReview(args);
        bookAction(bookActionType.ADDED_REVIEW, { data: review })(dispatch);
    } catch(err) {
        appAction(appActionType.SET_MESSAGE, { type: constants.MESSAGE_TYPE.ERROR, content: err.message })(dispatch);
        console.log(err.message);
    }

    return Promise.resolve("Done!");
}