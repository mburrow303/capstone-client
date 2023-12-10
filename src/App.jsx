import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//? import components here
import Nav from "./components/nav/Nav";
//import Header from "./components/header/Header";
//import Footer from "./components/footer/Footer";
import Auth from "./components/auth/Auth";
import ProfileIndex from "./components/profileIndex/ProfileIndex";
import PostIndex from "./components/postIndex/PostIndex";
import {Home, Home2} from "./components/home/Home";

function App() {
  const [token, setToken] = useState("");

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
        {/* <Header /> */}
        <Nav token={token} clearToken={clearToken} /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth setToken={updateToken} />} />
          {/*< Route path="/login" element={<Login setToken={updateToken} />} /> */}
          <Route path="/profile/:userId" element={<ProfileIndex token={token} />} />
          <Route path="/post" element={<PostIndex token={token} />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;