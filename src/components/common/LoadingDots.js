import React from "react";
import {connect} from "react-redux";

class LoadingDots extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			frame: 1,
			show: props.show
		};
	}

	componentWillReceiveProps(nextProps) {
	    if (this.props.show !== nextProps.show) {
	    	this.setState({
	    		frame: this.state.frame,
	    		show: nextProps.show
	    	});

	    	if (nextProps.show) {
	    		this.setInterval();
	    	} else {
	    		this.clearInterval();
	    	}
	    }  
	}

	setInterval() {
		this.interval = setInterval(() => {
			this.setState({
				frame: this.state.frame + 1
			});
		}, this.props.duration);
	}

	clearInterval() {
		clearInterval(this.interval);
	}

	componentDidMount() {
		this.setInterval();
	}

	componentWillUnmount() {
		this.clearInterval();
	}

	render() {
		let dots = this.state.frame % (this.props.dots + 1);
		let text = "";

		while (dots) {
			text += ".";
			dots -= 1;
		}

		return <span style={{display: (this.state.show? 'block' : 'none')}}>{text} </span>
	}
}

LoadingDots.defaultProps = { 
	duration: 300, dots: 3, show: false
}

function mapStateToProps(state, ownProps) {
	return {
		show: state.ajaxRequestsInProgress > 0
	}
}

export default connect(mapStateToProps)(LoadingDots);