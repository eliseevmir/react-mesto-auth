import logo from "../image/logo.svg";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <nav>
        <Link to="/">Main</Link>
        <Link to="/sign-in">Sign-In</Link>
        <Link to="/sign-up">Sign-Up</Link>
      </nav>
    </header>
  );
}

export default Header;
