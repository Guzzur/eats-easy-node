import { Component } from "react";
require("dotenv").config();

class Version extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiVersion: {
        majorApiVersion: 0,
        minorApiVersion: 0,
        buildApiVersion: 0
      }
    };
  }

  componentDidMount() {
    const apiUrl = process.env.API_URL || "https://eats-easy-spring.herokuapp.com/api";
    console.log(process.env);
    console.log(apiUrl);
    fetch(apiUrl + "/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true"
      }
    })
      .then(res => console.log(res) || res.text())
      .then(text => console.log(text) || (text ? JSON.parse(text) : {}))
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
    return apiVersion
      ? "EatsEasy API v" +
          apiVersion.majorApiVersion +
          "." +
          apiVersion.minorApiVersion +
          "." +
          apiVersion.buildApiVersion
      : "";
  }
}

export default Version;
