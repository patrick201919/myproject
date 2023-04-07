import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/usersRedux/authSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginData = { email, password };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  return (
    <div>
      <main>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit} className="loginForm">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            required
            autoComplete="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="connexion" />
        </form>
      </main>
    </div>
  );
};

export default Login;
