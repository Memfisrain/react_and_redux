import React from "react";
import {Link} from "react-router";

function AuthorsList(props) {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      </thead>
      <tbody>
      {props.authors.map(author => {
        return (
          <tr key={author.id}>
            <td><Link to={`author/${author.id}`}>{author.id}</Link></td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
}

AuthorsList.propTypes = {
  authors: React.PropTypes.array.isRequired
};

export default AuthorsList;
