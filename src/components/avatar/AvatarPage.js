import React from "react";
import {connect} from "react-redux";

const items = ["first", "second", "third", "fourth"];

class AvatarPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <ul>
          {items.map((item, i) => {
            return <PageLink key={i} pagename={item} {...this.props} />
          })}
        </ul>
        <PageInput {...this.props}/>
      </div>
    );
  }
}

const PagePic = (props) => {
  return (
    <img src={props.pagename}/>
  );
};

const PageLink = (props) => {
  console.log(props);
  return (
    <li href={props.pagename} data-num={props["data-num"]}>{props.pagename}</li>
  );
};

const PageInput = (props) => {
  return (
    <input type="text" {...props}/>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    pagename: "http://vh1press.mtvnimages.com/ShowImages/The-Breaks0529-3734/The Breaks 10.jpg?width=225&height=125&crop=true",
    "data-num": Math.random(),
    value: "Start"
  };
}

export default connect(mapStateToProps)(AvatarPage);
>>>>>>> 3fe34cb0a5f274a4499fe1e5045d6d6171a7c68e
