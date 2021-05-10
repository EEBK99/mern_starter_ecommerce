import react from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>EEBK99 E-commerce Application</h1>

      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default Home;
