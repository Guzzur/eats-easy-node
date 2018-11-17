import React, { Component } from "react";
require("dotenv").config();

class Version extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiVersion: "trying to fetch version..."
    };
  }

  componentDidMount() {
    const apiUrl = process.env.API_URL || "http://127.0.0.1:8080/api";
    console.log(process.env);
    fetch(apiUrl + "/whoami", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
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
    return apiVersion ? String(JSON.stringify(apiVersion)) : "";
  }
}

export default Version;
