import Header from "./Header"
import { Link } from "react-router-dom";

function Register() {
    return (
        <>
            <Header 
            linkName="Войти"
            routeName="/sign-in"

            />
            <div className="register">
                <div className="register__container">
                    <h2 className="register__title">Регистрация</h2>
                    <form className="register__form">

                        <input
                            type="email"
                            lang="ru"
                            placeholder="Email"
                            className="register__input"
                            required
                            minLength="2"
                            maxLength="40"
                        />

                        <input
                            type="text"
                            lang="ru"
                            placeholder="Пароль"
                            className="register__input"
                            required
                            minLength="2"
                            maxLength="200"
                        />
                    </form>
                    <button
                        className="register__button"
                        type="submit"
                        
                    >Зарегистрироваться</button>
                    <p className="register__subtitle">Уже зарегистрированы? <Link className="register__subtitle-link"> Войти</Link></p>
                </div>
            </div>
        </>
    )
}

export default Register;