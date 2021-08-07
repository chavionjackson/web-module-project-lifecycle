import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={this.props.user.avatar_url}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.user.login}</h5>
          <p className="card-text">
            <li>Followers: {this.props.user.followers_url.length}</li>
            <li>Following: {this.props.user.following_url.length}</li>
            <li>Projects: {this.props.user.repos_url.length}</li>
          </p>
          <a
            href={this.props.user.html_url}
            className="btn btn-primary"
          >
            Profile
          </a>
        </div>
      </div>
    );
  }
}

export default Card;
