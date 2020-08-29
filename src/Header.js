import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import Hook from "./Hook Up.png";

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__backicon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img className="header__logo" src={Hook} alt="tinder logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
