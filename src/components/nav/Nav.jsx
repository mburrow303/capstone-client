import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";

const Nav = ({ token, clearToken, userId }) => {
  return (
    
    <Navbar className="navbar" >
      

    <a> <Link 
    // style={{ margin: "3px 10px" }} 
    // style={{ color: "#d2b48c"}} 
    to="/"> 
      <AiOutlineHome /> </Link>
    </a>


    <a> <Link 
    // style={{ margin: "3px 10px" }}
    //  style={{ color: "#d2b48c"}} 
    to={`/post/${userId}`}>
      <FaPlus /> </Link>
    </a>

    <a> <Link 
    // style={{ margin: "3px 10px "}} 
    // style={{ color: "#d2b48c"}} 
    to="/profile/:userId">
      <CgProfile /> </Link>
    </a> 
    
       

        {/* {!token ? (
            <Link style={{ margin: "3px 10px" }} to="/">
              Sign Up/Login
            </Link>
          ) : (
            <Link onClick={clearToken} style={{ margin: "3px 10px" }} to="/">
              Log Out
            </Link>
          )} */}
      </Navbar>
    
  );
};

export default Nav;
