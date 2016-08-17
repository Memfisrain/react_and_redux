import * as types from "../actions/actionTypes";

export default function AuthorReducer(authors = [], action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    case types.UPDATE_AUTHOR_SUCCESS:
      debugger;
      return [
        ...authors.filter(author => author.id !== action.author.id),
        Object.assign({}, action.author)
      ];

    case types.ADD_AUTHOR_SUCCESS:
      return [
        ...authors, Object.assign({}, action.author)
      ];

    default:
      return authors;
  }
}
