import react, { useEffect } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios.get("https://localhost:3000/products").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div>
      <h2>All Products</h2>
      <p>All products are listed below.</p>
    </div>
  );
};

export default Home;
