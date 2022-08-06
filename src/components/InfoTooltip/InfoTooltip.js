import "./InfoTooltip.css";

function InfoTooltip({ text, opened, close }) {
  if (opened) {
    return (
      <div className="popup">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close"
            aria-label="Закрыть"
            onClick={close}
          ></button>
          <div className="popup__img-status" />
          <h3 className="popup__title">{text}</h3>
        </div>
      </div>
    );
  }
  return;
}

export default InfoTooltip;
