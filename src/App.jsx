//import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./components/header/Header";

//? import components here
import Nav from "./components/nav/Nav";
//import Footer from "./components/footer/Footer";
import Auth from "./components/auth/Auth";
import ProfileIndex from "./components/profileIndex/ProfileIndex";
import PostIndex from "./components/postIndex/PostIndex";
import { Home } from "./components/home/Home";

function App() {
  //console.log("userId in App:", userId );
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  //const { userId } = useParams();

  useEffect(initializeToken, []);

  function initializeToken() {
    setToken(localStorage.token);
    console.log(localStorage.token);
  }

  function updateToken(newToken) {
    setToken(newToken);
    localStorage.setItem("token", newToken);

    let localToken = localStorage.token;
    console.log(localToken);
  }

  function clearToken() {
    setToken("");
    localStorage.removeItem("token");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth setToken={updateToken} />} />
          {/*< Route path="/login" element={<Login setToken={updateToken} />} /> */}
          <Route
            path="/profile/:userId"
            element={<ProfileIndex token={token} /* userId={userId} */ />}
          />
          <Route
            path="/post/:userId"
            element={<PostIndex token={token} /* userId={userId} */ />}
          />
        </Routes>
        {/* <Footer /> */}
        <Nav token={token} clearToken={clearToken} SetUserId={userId} /> 
      </BrowserRouter>
    </div>
  );
}

export default App;
