import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Welcome To Studee.com</h1>
      <div style={{display:'flex' ,justifyContent:'space-around',borderBottom:'2px solid black',padding:10}}>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/about">
        <button>About us</button>
      </Link>
      </div>
    </>
  );
};

export { Home };
