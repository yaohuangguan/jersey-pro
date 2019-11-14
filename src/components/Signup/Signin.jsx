import React from "react";
import FormInput from "./Form-input";
import Button from "../Custom-button/Button";
import { googleSignIn } from "../../firebase/firebase";
import "./Signin.scss";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2 className="h3-responsive text-center my-4">
          SIGN IN WITH EMAIL AND PASSWORD
        </h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            id="email"
            label=" email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            id="password"
            required
          />
          <div className="btn-group ">
            <input
              type="submit"
              className="btn btn-success mr-4"
              value="SUBMIT"
            />
            <Button onClick={googleSignIn}>
              <i className="fab fa-google"></i> Sign in with google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
