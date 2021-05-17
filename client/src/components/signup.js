import react from "react";
import axios from "axios";

const Signup = () => {
  const submitform = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/signup").then((res) => {
      console.log(res);
    });
    console.log("You are registered successfully!");
  };
  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={submitform}>
        <input type="name" placeholder="Your Fullname"></input>
        <input type="email" placeholder="Your Email"></input>
        <input type="password" placeholder="Your Password"></input>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
