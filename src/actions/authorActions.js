import * as types from "./actionTypes";
import AuthorApi from "../api/mockAuthorApi";
import {BeginAjaxRequest, AjaxRequestSuccess} from "./ajaxStatusActions";

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function addAuthorSuccess(author) {
  return {type: types.ADD_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function deleteAuthorSuccess(authorId) {
  return {type: types.DELETE_AUTHOR_SUCCESS, authorId};
}

const loadAuthors = () => {
  return function (dispatch) {
    dispatch(BeginAjaxRequest());

    return AuthorApi
      .getAllAuthors()
      .then(authors => {
        dispatch(AjaxRequestSuccess());
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const saveAuthor = (author) => {
  return function (dispatch) {
    dispatch(BeginAjaxRequest());

    return AuthorApi
      .saveAuthor(author)
      .then(() => {
        dispatch(AjaxRequestSuccess());
        author.id? dispatch(updateAuthorSuccess(author)) : dispatch(addAuthorSuccess(author));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const deleteAuthor = (authorId) => {
  return function(dispatch) {
    dispatch(BeginAjaxRequest());

    return AuthorApi
      .deleteAuthor(authorId)
      .then(() => {
        dispatch(AjaxRequestSuccess());
        dispatch(deleteAuthorSuccess(authorId));
      })
      .catch(err => {
        throw err;
      });
  }
};

export default loadAuthors;
