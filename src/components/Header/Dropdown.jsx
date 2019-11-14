/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./Dropdown.scss";
const Dropdown = ({ currentUser, classname }) => {
  return (
    <div>
      <li className={`${classname} dropdown`}>
        <span>
          {"Hi " + currentUser.displayName}{" "}
          <i className="fas fa-caret-down"></i>
        </span>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" onClick={() => auth.signOut()}>
              SIGN OUT
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default Dropdown;
