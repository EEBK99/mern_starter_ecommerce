import react, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos/1");
  });
  return (
    <div>
      <h2>All Products</h2>
      <p>All products are listed below.</p>
    </div>
  );
};

export default Home;
