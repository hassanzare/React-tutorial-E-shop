import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StoreIcon from "@mui/icons-material/Store";

const Header = () => {
  return (
    <>
      <div className="header__logo">
        <StoreIcon className="header__logoImage" fontSize="large" />
        <h1 className="header__logoTitle">eSHop</h1>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="nav__item">
          <div className="nav__itemLineone">Hello Guest</div>
          <div className="nav__itemLinetwo">Sign In</div>
        </div>
        <div className="nav__item">
          <div className="nav__itemLineone">Your</div>
          <div className="nav__itemLinetwo">Shop</div>
        </div>
        <div className="nav__item">
          <ShoppingBasketIcon fontSize="large" />
          <div className="nav__itemLinetwo">0</div>
        </div>
      </div>
    </>
  );
};

export default Header;
