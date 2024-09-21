import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">Copyright &copy; 2022 All rights reserved</h1>
      <p style={{ textAlign: "center" }}>
        Website developed by <i>Sk Mahammad Irfan</i>
      </p>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>|
      </p>
    </div>
  );
};

export default Footer;
