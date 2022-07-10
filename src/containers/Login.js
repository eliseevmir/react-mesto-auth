import React from "react";
import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import Button from "../components/Button";
import TitleForm from "../components/TitleForm";
import InfoTooltip from "../components/InfoTooltip";
import RegistrationStatusImage from "../image/Union__error.svg";

function Login() {
  return (
    <>
      <Header></Header>
      <AuthForm>
        <TitleForm className="data__title">Вход</TitleForm>
        <Button className="data__button">Войти</Button>
      </AuthForm>

      <InfoTooltip RegistrationStatusImage={RegistrationStatusImage}>
        Что-то пошло не так! Попробуйте ещё раз.
      </InfoTooltip>
    </>
  );
}

export default Login;
