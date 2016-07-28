import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function ajaxStatusReducer(ajaxRequestsInProgress = initialState.ajaxRequestsInProgress, action) {
  switch(action.type) {
    case types.BEGIN_AJAX_REQUEST:
      return ajaxRequestsInProgress + 1;

    case types.AJAX_REQUEST_SUCCESS:
    case types.AJAX_REQUEST_FAILURE:
      return ajaxRequestsInProgress - 1;

    default:
      return ajaxRequestsInProgress;
  }
}
