import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css";
import { Form } from "reactstrap";
import { Card, CardBody, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
// import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink} from "react-router-dom";

const Home = () => {
  return (
    Form,
    Card,
    CardBody,
    Button,

    (
      <>
      {/* Form is made to hold background image in CSS file */}
        <Form className="container"></Form>

       
        {/* <Card className="top button" style={{ backgroundColor: '#d2b48c'}}>
          
          <p>Already a member?</p>

          
            
            <Button style={{ backgroundColor: '#808080'}}>
              
              <Link to="/auth">Login</Link>
            </Button>
          
        </Card> */}

        <Card className="bottom button" style={{ backgroundColor: '#d2b48c'}}>
          <p>Already a member? Don't Have an account?</p>

          
            <Button style={{ backgroundColor: '#808080'}}>
            
              <Link to="/auth"> Login / Sign Up </Link>
            </Button>
            <br />
        </Card>
      </>
    )
  );
};

export { Home };
