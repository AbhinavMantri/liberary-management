import { UserService } from "../../../services";
import { userAction } from '../../actions';
import { userActionType } from "../../actions/user";

export default async (args, dispatch) => {
    try {
        const user = await UserService.login(args);
        userAction(userActionType.SET_LOGIN, { data: user, ...args })(dispatch);
    } catch(err) {
        userAction(userActionType.SET_ERROR, { error: err.message })(dispatch);
        console.log(err.message);
    }

    return Promise.resolve("Done!");
}