import { Link } from "react-router-dom";

const Home = ({ token, clearToken }) => {
  return (
    <nav>
      <Link style={{ margin: "3px 10px" }} to="/">
        Home
      </Link>
      <Link style={{ margin: "3px 10px" }} to="/auth">
        Login/Signup
      </Link>
      {/* {
        !token
        ?
        <Link style={{margin:'3px 10px'}} to="/auth">Sign Up</Link>
        :
        <Link onClick={clearToken} style={{margin:'3px 10px'}} to="/">Log Out</Link>
      } */}
    </nav>
  );
};

export default Home;