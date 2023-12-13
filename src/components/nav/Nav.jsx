import React from "react";
import { Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";

const Nav = ({ token, clearToken }) => {
  return (
    
      <Navbar className="navbar" >
      
          <div> <Link 
          to="/"> 
            <AiOutlineHome style={{ color:'#808080'}} /> </Link>
          </div>

          <div> <Link 
           to="/post">
            <FaPlus style={{ color:'#808080'}} /> </Link>
          </div>

          <div> <Link 
          to="/profile/:userId">
            <CgProfile style={{ color:'#808080'}} /> </Link>
          </div>
       

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