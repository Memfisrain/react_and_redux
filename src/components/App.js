import React from "react";
import Header from "./common/Header";

class App extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header/>
				{this.props.children}
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.object.isRequired
};

export default App;