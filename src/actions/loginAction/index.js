import { createAction } from "redux-actions";
import * as Actions from './type';

export const loginAction = createAction(Actions.LOGIN)

export const logoutAction = createAction(Actions.LOGOUT)