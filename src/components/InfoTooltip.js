import Success from '../images/Success.svg';
import Denied from '../images/Denied.svg';

function InfoTooltip({
    name,
    opacity,
    isOpen,
    onClose,
    status
}) {
    return (
        <div
            className={`popup popup_opacity_${opacity} ${isOpen ? "popup_opened" : ""
                } `}
            id={`popup-${name}`}
        >
            <div className="popup__container">
                <div className="popup__image" style={{backgroundImage:`url(${status ? Success : Denied})`}}/>
                <h2 className="popup__message">{status ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</h2>
                <button
                    className="popup__button-close"
                    id={`${name}-button-close`}
                    type="button"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    );
}

export default InfoTooltip;