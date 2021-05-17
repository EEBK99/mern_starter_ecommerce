import react from "react";
import axios from "axios";

const Login = () => {
  const submitform = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/login").then((res) => {
      console.log(res);
    });
    console.log("You are Logged in successfully!");
  };
  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={submitform}>
        <input type="email" placeholder="Your Email"></input>
        <input type="password" placeholder="Your Password"></input>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
