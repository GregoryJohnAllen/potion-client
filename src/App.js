import React, { useState, useEffect } from "react";
import './app.css'
import { Fragment } from "react";
import Sitebar from "./components/Home/Navbar";
import Auth from "./components/Auth/Auth";
import Footer from "./components/Home/Footer";
import Sidebar from "./components/Home/Sidebar";
import ShopIndex from "./components/Shop/ShopIndex";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const updateToken = newToken => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(newToken);
  };

  const protectedViews = () => {
    return localStorage.getItem("token") === sessionToken ? (
      <ShopIndex token={sessionToken} />
    ) : (
      <Auth updateToken={updateToken} />
    );
  };

  return (
      <Fragment>
        <Sitebar clickLogout={clearToken} />
        <Router>
          <Sidebar />
          {protectedViews()}
        </Router>
        <Footer />
      </Fragment>
  );
}

export default App;
