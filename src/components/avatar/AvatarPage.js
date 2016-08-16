import React from "react";
import {render} from "react-dom";
import {connect} from "react-redux"

class Avatar extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				<PagePic pagename={this.props.pagename} />
				<PageLink pagename={this.props.pagename} />
			</div>
		);
	}
}
	


const PagePic = (props) => {
	console.log(props);
	return (<img src={"http://vh1press.mtvnimages.com/ShowImages/The-Breaks0529-3734/The%20Breaks%2010.jpg?width=225&height=125&crop=true"} />);
};

const PageLink = (props) => {
	return (<a href={"https://www.facebook.com/" + props.pagename}>{props.pagename}</a>);
}


function mapStateToProps(state, ownProps) {
	return {
		pagename: "Engineering"
	}
}

export default connect(mapStateToProps)(Avatar);

