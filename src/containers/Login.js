import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import Button from "../components/Button";
import TitleForm from "../components/TitleForm";
import InfoTooltip from "../components/InfoTooltip";
import RegistrationStatusImage from "../image/Union__error.svg";
import * as auth from "../utils/auth";
import { CurrentUserContext } from "../context/CurrentUserContext";

function Login() {
  const history = useHistory();
  const [popupInfo, setPopupInfo] = useState(false);
  const { handleLogin } = useContext(CurrentUserContext);

  const [state, setState] = useState({
    password: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { password, email } = state;

    auth.authorization(password, email).then((data) => {
      if (data.token) {
        setState({
          password: "",
          email: "",
        });
        handleLogin();
        history.push("/");
      } else {
        openStatusAuth();
      }
    });
  }

  function openStatusAuth() {
    setPopupInfo(true);
  }

  function closePopup() {
    setPopupInfo(false);
  }

  return (
    <>
      <Header>
        <Link className="header__button" to="/sign-up">
          Зарегистрироваться
        </Link>
      </Header>
      <AuthForm
        state={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      >
        <TitleForm className="data__title">Вход</TitleForm>
        <Button className="data__button">Войти</Button>
      </AuthForm>

      <InfoTooltip
        RegistrationStatusImage={RegistrationStatusImage}
        onClose={closePopup}
        popupInfo={popupInfo}
      >
        Что-то пошло не так! Попробуйте ещё раз.
      </InfoTooltip>
    </>
  );
}

export default Login;
