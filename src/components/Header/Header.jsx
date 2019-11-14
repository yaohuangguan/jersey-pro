import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { auth } from "../../firebase/firebase";
import Dropdown from "./Dropdown";
import "./header.scss";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={Logo} alt="" className="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          购物
        </Link>
        <Link to="/contact" className="option">
          联系
        </Link>
        {currentUser ? (
          <Dropdown classname={"option"} currentUser={currentUser} />
        ) : (
          <>
            <Link className="option" to="/signin">
              登录
            </Link>
            <Link className="option" to="/signup">
              注册
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
