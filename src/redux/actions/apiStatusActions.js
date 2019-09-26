import actionTypes from "./actionTypes";

export function beginApiCall() {
  return {
    type: actionTypes.BEGIN_API_CALL
  };
}
