function InfoTooltip({ RegistrationStatusImage, children }) {
  return (
    <div>
      <div className="popup popup_opened">
        <div className="popup__info">
          <img
            src={RegistrationStatusImage}
            alt="Статус регистрации"
            className="popup__status"
          ></img>
          <p className="popup__text">{children}</p>
          <button className="popup__close"></button>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
