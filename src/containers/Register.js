import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import InfoTooltip from "../components/InfoTooltip";
import RegistrationStatusImageOk from "../image/Union__ok.svg";
import Button from "../components/Button";
import TitleForm from "../components/TitleForm";
import QuestionForm from "../components/QuestionForm";
import * as auth from "../utils/auth";

function Register() {
  const history = useHistory();
  const [popupInfo, setPopupInfo] = useState(false);

  const [state, setState] = useState({
    password: "",
    email: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { password, email } = state;

    auth.register(password, email).then((res) => {
      if (res.data) {
        openStatusRegister();
      }
    });
  }

  function openStatusRegister() {
    setPopupInfo(true);
  }

  function closePopup() {
    setPopupInfo(false);
    history.push("/sign-in");
  }

  return (
    <>
      <Header>
        <Link className="header__button" to="/sign-in">
          Войти
        </Link>
      </Header>
      <AuthForm
        handleChange={handleChange}
        state={state}
        handleSubmit={handleSubmit}
      >
        <TitleForm className="data__title">Регистрация</TitleForm>
        <Button className="data__button">Зарегистрироваться</Button>
        <QuestionForm />
      </AuthForm>
      <InfoTooltip
        RegistrationStatusImage={RegistrationStatusImageOk}
        popupInfo={popupInfo}
        onClose={closePopup}
      >
        Вы успешно зарегистрировались!
      </InfoTooltip>
    </>
  );
}

export default Register;
