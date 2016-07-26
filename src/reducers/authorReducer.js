import * as types from "../actions/actionTypes";

export default function AuthorReducer(authors = [], action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return authors;
  }
}
