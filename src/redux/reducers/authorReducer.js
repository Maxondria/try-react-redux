import actionTypes from "../actions/actionTypes";

export default function authorReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
