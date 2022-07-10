import React from "react";
import Header from "../components/Header";
import AuthForm from "../components/AuthForm";
import InfoTooltip from "../components/InfoTooltip";
import RegistrationStatusImage from "../image/Union__ok.svg";
import Button from "../components/Button";
import TitleForm from "../components/TitleForm";
import QuestionForm from "../components/QuestionForm";

function Register() {
  return (
    <>
      <Header />
      <AuthForm>
        <TitleForm className="data__title">Регистрация</TitleForm>
        <Button className="data__button">Зарегистрироваться</Button>
        <QuestionForm />
      </AuthForm>
      <InfoTooltip RegistrationStatusImage={RegistrationStatusImage}>
        Вы успешно зарегистрировались!
      </InfoTooltip>
    </>
  );
}

export default Register;
