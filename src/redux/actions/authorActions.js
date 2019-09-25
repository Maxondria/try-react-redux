import actionTypes from "./actionTypes";
import * as authorApi from "../../api/authorApi.js";

export function loadAuthorsSuccess(authors) {
  return {
    type: actionTypes.LOAD_AUTHORS_SUCCESS,
    authors
  };
}

export const loadAuthors = function() {
  return function(dispatch) {
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
};
