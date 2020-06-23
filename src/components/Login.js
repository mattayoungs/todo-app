import React from "react";
import InputText from "./InputText.js";
import styled from "styled-components";
import Button from "./Button";

const validUserInfo = {
  email: "test@kenzie.academy",
  password: "test123",
};

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    error: "",
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.email === validUserInfo.email &&
      this.state.password === validUserInfo.password
    ) {
      alert("yep!");
      this.setState({ error: "" });
    } else {
      this.setState({
        error: "Invalid Email or Password",
        email: "",
        password: "",
      });
    }
  };
  render() {
    return (
      <FlexCol>
        <form onSubmit={this.onSubmit}>
          <Title>Login</Title>
          <Body>Please enter your Information to Continue</Body>
          {this.state.error && (
            <Body style={{ color: "#f06868" }}>{this.state.error}</Body>
          )}
          <FlexCol>
            <Label>Email</Label>
            <InputText
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FlexCol>
          <FlexCol>
            <Label>Password</Label>
            <InputText
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FlexCol>
          <Button>Login</Button>
        </form>
        <Body>Not signed up yet? Register Here!</Body>
      </FlexCol>
    );
  }
}

const Title = styled.h1`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
`;

const Label = styled.label`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
`;

const Body = styled.p`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding-bottom: 2rem;
`;

export default Login;
