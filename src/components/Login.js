import Header from "./Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authorize, getContent } from "../utils/Auth";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const tokenCheck = () => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      getContent(jwt)
        .then((user) => {
          onLogin(user.data.email);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    authorize(email, password)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        console.log(data);
        onLogin(email);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header linkName="Регистрация" routeName="/sign-up" />
      <div className="login">
        <div className="login__container">
          <h2 className="login__title">Вход</h2>
          <form className="login__form" onSubmit={handleSubmit}>
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
            <button className="login__button" type="submit">
              Войти
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
