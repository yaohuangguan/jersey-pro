import React, { Suspense, lazy } from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfile } from "./firebase/firebase";
import "./App.scss";
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Header = lazy(() => import("./components/Header/Header"));
const Signin = lazy(() => import("./components/Signup/Signin"));
const Signup = lazy(() => import("./components/Signup/Signup"));
// import Header from "./components/Header/Header";
// import Signin from "./components/Signup/Signin";
// import Signup from "./components/Signup/Signup";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfile(user);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: user });
      }
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="container">
        <Header currentUser={this.state.currentUser}></Header>
        <br />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
