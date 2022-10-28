import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="header__logo">
            <StoreIcon className="header__logoImage" fontSize="large" />
            <h2 className="header__logoTitle">eSHop</h2>
          </div>
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <div className="nav__item">
            <span className="nav__itemLineone">Hello Guest</span>
            <span className="nav__itemLinetwo">Sign In</span>
          </div>
          <div className="nav__item">
            <span className="nav__itemLineone">Your</span>
            <span className="nav__itemLinetwo">Shop</span>
          </div>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <div className="nav__itemBasket">
              <ShoppingBasketIcon className="itemBasket" fontSize="medum" />
              <span className="nav__itemLinetwo nav__basketCount">0</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
