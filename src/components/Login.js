import Header from './Header';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authorize } from '../utils/Auth';

function Login({ onLogin }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();

    function handleEmailChange(e) {
        setEmail(e.target.value);

    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        authorize(email, password)
            .then(data => {
                /* if (data.jwt) {
                     localStorage.setItem('jwt', data.jwt);
                     handleLogin(data.user);
                     const url = location.state?.backUrl || '/ducks';
                     navigate(url);
                 }*/
                console.log(data);
                onLogin(email);
                navigate("/");
            })
            .catch(err => {
                console.log(err);

            });
    }

    return (
        <>
            <Header
                linkName="Регистрация"
                routeName="/sign-up"

            />
            <div className="login">
                <div className="login__container">
                    <h2 className="login__title">Вход</h2>
                    <form 
                    className="login__form"
                    onSubmit={handleSubmit}>

                        <input
                            type="email"
                            lang="ru"
                            placeholder="Email"
                            className="login__input"
                            required
                            minLength="2"
                            maxLength="40"
                            onChange={handleEmailChange}
                            value={email || ""}
                        />

                        <input
                            type="password"
                            lang="ru"
                            placeholder="Пароль"
                            className="login__input"
                            required
                            minLength="2"
                            maxLength="200"
                            onChange={handlePasswordChange}
                            value={password || ""}
                        />
                        <button
                            className="login__button"
                            type="submit"

                        >Войти</button>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login;