import * as types from "../actions/actionTypes";
import initialState from "../store/initialState";

export default function ajaxStatusReducer(ajaxRequestsInProgress = initialState.ajaxRequestsInProgress, action) {
	if (action.type === types.BEGIN_AJAX_REQUEST) {
		return ajaxRequestsInProgress + 1;
	} else if (action.type === types.FINISHED_AJAX_REQUEST_SUCCESS) {
		return ajaxRequestsInProgress - 1;
	} 

	return ajaxRequestsInProgress;
}