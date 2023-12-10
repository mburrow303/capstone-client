import React from "react";
import { Link } from "react-router-dom";
import {
   Form, 
   FormGroup,  
   Button, 
  } from "reactstrap";
import "../Styles/Home.css";
import "bootstrap/dist/css/bootstrap.css";
// import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink} from "react-router-dom";

const Home = () => {
  return (
    Form,
    FormGroup,
    Link,
    Button,
    (
    <>
    
    
      <Form className='container'>
      <img src="https://github.com/maryreagan/mini-search/blob/master/favicon.png?raw=true"></img>
        <FormGroup floating>
          
           {/* <Link class="link" style={{ margin: "3px 10px" }} to="/auth"></Link> */}
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              
                
    
        <Button className="button">  <Link style={{ margin: "3px 10px" }} to="/auth">
          Login
          </Link></Button>
    
   </FormGroup>
      </Form>

      <Form className="bottom">
        Don't Have an account? 
        <Button className="button">  <Link style={{ margin: "3px 10px" }} to="/auth">
          Sign Up
          </Link></Button>

      </Form>

      
    </>
    )
  );
};

export { 
   Home, 
};