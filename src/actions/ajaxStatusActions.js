import * as types from "./actionTypes";

export function BeginAjaxRequest(request) {
	return {type: types.BEGIN_AJAX_REQUEST, request};
}

export function FinishedAjaxRequestSuccess(request) {
	return {type: types.FINISHED_AJAX_REQUEST_SUCCESS, request};
}