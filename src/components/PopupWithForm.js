import React from "react";

function PopupWithForm({
  name,
  opacity,
  title,
  children,
  buttonTitle,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div
      className={`popup popup_opacity_${opacity} ${
        isOpen ? "popup_opened" : ""
      } `}
      id={`popup-${name}`}
    >
      <div className="popup__container">
        <form
          className="popup__form"
          id={name}
          name={name}
          method="post"
          onSubmit={onSubmit}
        >
          <h2 className="popup__form-title">{title}</h2>
          {children}
          <button
            className="popup__button"
            type="submit"
            id={`${name}-button-save`}
          >
            {buttonTitle}
          </button>
          <button
            className="popup__button-close"
            id={`${name}-button-close`}
            type="button"
            onClick={onClose}
          ></button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
