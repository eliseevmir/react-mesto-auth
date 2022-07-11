function InfoTooltip({ RegistrationStatusImage, children, popupInfo, onClose }) {

  const className = `popup ${popupInfo ? "popup_opened" : "" }`

  return (
    <div>
      <div className={className}>
        <div className="popup__info">
          <img
            src={RegistrationStatusImage}
            alt="Статус регистрации"
            className="popup__status"
          ></img>
          <p className="popup__text">{children}</p>
          <button className="popup__close" onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
