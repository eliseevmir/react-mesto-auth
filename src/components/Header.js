import logo from "../image/logo.svg";

function Header(props) {
  const { children, email } = props;

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__data">
        <span className="header__email">{email}</span>
        {children}
      </div>
    </header>
  );
}

export default Header;
