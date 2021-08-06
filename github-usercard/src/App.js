import React from "react";
import "./App.css";
import Card from "./Card";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/chavionjackson")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ userData: res });
      })
      .catch((err) => console.log("oops!", { err }));

    fetch("https://api.github.com/users/chavionjackson/following")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ users: res });
      })
      .catch((err) => console.log("oops!", { err }));
  }

  render() {
    return (
      <div className="App">
        <h1>GitHub Friends!</h1>
        <br />
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={this.state.userData.avatar_url}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{this.state.userData.name}</h5>
            <p className="card-text">
              <li>Followers: {this.state.userData.followers}</li>
              <li>Following: {this.state.userData.following}</li>
            </p>
            <a href={this.state.userData.html_url} className="btn btn-primary">
              Profile
            </a>
          </div>
        </div>
        {this.state.users.map((user) => <Card key={user.id} user={user} />)}
      </div>
    );
  }
}

export default App;
