import React from "react";
import FormInput from "./Form-input";
import CustomButton from "../Custom-button/Button";
import { auth, createUserProfile } from "../../firebase/firebase";
import "./Signin.scss";
class Signup extends React.Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    passwordConf: "",
    errors: []
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, passwordConf } = this.state;
    if (password !== passwordConf) {
      this.setState(prevState => ({
        errors: ["Your password dont match", ...prevState.errors]
      }));
      return;
    }
    if (!displayName || !email || !password || !passwordConf) {
      this.setState(prevState => ({
        errors: ["You must enter those credentials", ...prevState.errors]
      }));
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        passwordConf: "",
        errors: []
      });
    } catch (error) {
      console.log(error);
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, passwordConf } = this.state;
    return (
      <>
        <div className="sign-up">
          <h2 className="title">REGISTER YOUR NEW ACCOUNT </h2>

          <form action="" className="signup-form" onSubmit={this.handleSubmit}>
            {this.state.errors ? (
              <div className="text-danger font-weight-bold">
                {this.state.errors}
              </div>
            ) : null}
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              onChange={this.handleChange}
              label={"USERNAME"}
            />{" "}
            <FormInput
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              label={"EMAIL"}
            />{" "}
            <FormInput
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              label={"PASSWORD"}
            />{" "}
            <FormInput
              type="password"
              name="passwordConf"
              value={passwordConf}
              onChange={this.handleChange}
              label={"CONFIRM PASSWORD"}
            />
            <input type="submit" value="SIGN UP" className="btn btn-primary" />
          </form>
        </div>
        <br />
        <br />
      </>
    );
  }
}

export default Signup;
