import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import "./HomePage.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Searchbar from "../../components/Searchbar/Searchbar";

const HomePage = () => {
  return (
    <div className="home">
      <div className="header">
        <div className="header_left">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="header_right">
          <Link to={"gmail"}>Gmail</Link>
          <Link to={"images"}>Images</Link>
          <AppsIcon />
          <AccountCircleIcon />
        </div>
      </div>

      <div className="body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Logo"
        />
        <div className="body_inputContainer">
          <Searchbar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;