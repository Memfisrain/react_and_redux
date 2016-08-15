import React from "react";
import {Link, IndexLink} from "react-router";
import LoadingDots from "./LoadingDots";

const Header = () => {
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			{" | "}
			<Link to="/about" activeClassName="active">About</Link>
			{" | "}
			<Link to="/courses" activeClassName="active">Courses</Link>
			{" | "}
			<Link to="/avatar" activeClassName="active">Avatar</Link>
			<LoadingDots dots={5} duration={300} show={false} />
		</nav>
	);
};

export default Header;