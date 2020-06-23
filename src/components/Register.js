import React from "react";
import InputText from "./InputText.js";
import styled from "styled-components";
import Button from "./Button";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    passwordRepeat: "",
    error: "",
    errors: {
      email: "",
      password: "",
      passwordRepeat: "",
    },
  };

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    let error = "";
    switch (name) {
      case "email":
        if (value.length > 30) {
          error = "email must be less than 30 characters.";
        } else if (!validEmailRegex.test(value)) {
          error = "please enter a valid email address";
        }
        break;
      case "password":
        if (value.length < 5) {
          error = "password must be greater than 5 charaters";
        }
        break;
      case "passwordRepeat":
        if (value !== this.state.password) {
          error = "passwords must match";
        }
    }
    this.setState({
      [name]: value,
      errors: { ...this.state.errors, [name]: error },
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    // if (
    //   this.state.email === validUserInfo.email &&
    //   this.state.password === validUserInfo.password
    // ) {
    //   alert("yep!");
    //   this.setState({ error: "" });
    // } else {
    //   this.setState({
    //     error: "Invalid Email or Password",
    //     email: "",
    //     password: "",
    //   });
    // }
  };
  render() {
    return (
      <FlexCol>
        <form onSubmit={this.onSubmit}>
          <Title>Sign Up</Title>
          <Body>Please enter your Information to Continue</Body>
          {this.state.error && (
            <Body style={{ color: "#f06868" }}>{this.state.error}</Body>
          )}
          <FlexCol>
            <Label>Email</Label>
            <InputText
              type="text"
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
          <FlexCol>
            <Label>Repeat Password</Label>
            <InputText
              type="password"
              name="passwordRepeat"
              placeholder="repeat password"
              value={this.state.passwordRepeat}
              onChange={this.handleChange}
            />
          </FlexCol>
          <Button>Sign Up</Button>
        </form>
        <Body>Already have an account? Login here!</Body>
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

export default Register;
