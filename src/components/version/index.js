import React, { Component } from "react";

class Version extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiVersion: "trying to fetch version..."
    };
  }

  componentDidMount() {
    const apiUrl =
      process.env.apiUrl || "https://eats-easy-spring.herokuapp.com/api";
    fetch(apiUrl + "/user/", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(res => console.log(res) || res.json())
      .then(
        apiVersion =>
          console.log(apiVersion) ||
          this.setState({
            apiVersion
          })
      )
      .catch(err => console.error(err));
  }

  render() {
    const { apiVersion } = this.state;
    console.log(apiVersion);
    return apiVersion ? <div>{apiVersion}</div> : "";
  }
}

export default Version;
