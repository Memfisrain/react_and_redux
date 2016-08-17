import React from "react";
import {Link} from "react-router";

function AuthorsList({authors, onAuthorDelete, show}) {
  let display = show? "" : "none";

  return (
    <table style={{display}} className="table">
      <thead>
      <tr>
        <th></th>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
      </tr>
      </thead>
      <tbody>
      {authors.map(author => {
        return (
          <tr key={author.id}>
            <td><a href="javascript: void(0)" onClick={onAuthorDelete.bind(null, author.id)}>delete</a></td>
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
  authors: React.PropTypes.array.isRequired,
  onAuthorDelete: React.PropTypes.func.isRequired
};

export default AuthorsList;
