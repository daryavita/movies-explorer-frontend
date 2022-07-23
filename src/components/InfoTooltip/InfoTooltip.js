import './InfoTooltip.css';

function InfoTooltip() {
  return (
    <div className="popup popup_opened">
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть"
        ></button>
        <div className="popup__img-status"/>
        <h3 className="popup__title">Что-то пошло не так...</h3>
      </div>
    </div>
  );
}

export default InfoTooltip;
