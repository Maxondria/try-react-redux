import actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(state = initialState.loadingStatus, action) {
  if (action.type === actionTypes.BEGIN_API_CALL) {
    return true;
  } else if (
    action.type === actionTypes.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return false;
  }
  return state;
}
