import Header from "./Header"

function Login() {
    return (
        <>
            <Header 
            linkName="Регистрация"
            routeName="/sign-up"

            />
            <div className="login">
                <div className="login__container">
                    <h2 className="login__title">Вход</h2>
                    <form className="login__form">

                        <input
                            type="email"
                            lang="ru"
                            placeholder="Email"
                            className="login__input"
                            required
                            minLength="2"
                            maxLength="40"
                        />

                        <input
                            type="text"
                            lang="ru"
                            placeholder="Пароль"
                            className="login__input"
                            required
                            minLength="2"
                            maxLength="200"
                        />
                    </form>
                    <button
                        className="login__button"
                        type="submit"
                        
                    >Войти</button>
                </div>
            </div>
        </>
    )
}

export default Login;