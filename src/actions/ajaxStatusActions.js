import * as types from "./actionTypes";

export function BeginAjaxRequest() {
	return {type: types.BEGIN_AJAX_REQUEST};
}

export function AjaxRequestSuccess() {
	return {type: types.AJAX_REQUEST_SUCCESS};
}

export function AjaxRequestFailure() {
  return {type: types.AJAX_REQUEST_FAILURE};
}
