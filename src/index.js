import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import configureStore from "./store/configureStore";
import {loadCourses, deleteCourses} from "./actions/courseActions";
import loadAuthors from "./actions/authorActions";
import {Provider} from "react-redux";
import {Router, browserHistory} from "react-router";
import routes from "./routes";
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import initialState from "./store/initialState";

const store = configureStore(initialState);
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById("app")
);
