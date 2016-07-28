import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import {BeginAjaxRequest, AjaxRequestSuccess} from "./ajaxStatusActions";

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

const loadAuthors = () => {
  return function(dispatch) {
    dispatch(BeginAjaxRequest());

    return AuthorApi
      .getAllAuthors()
      .then(authors => {
        dispatch(AjaxRequestSuccess());
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      })
  }
};

export default loadAuthors;
