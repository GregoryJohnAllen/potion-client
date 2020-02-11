import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

export function Auth(props) {
  const [showLogin, setShowLogin] = useState(true);

  function toggleLogin() {
    return showLogin ? (
      <Login changeView={changeView} updateToken={props.updateToken} />
    ) : (
      <Signup changeView={changeView} updateToken={props.updateToken} />
    );
  }
  function changeView() {
    if (showLogin) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }
  return (
    <div>
      {toggleLogin()}
    </div>
  );
}

export default Auth;
