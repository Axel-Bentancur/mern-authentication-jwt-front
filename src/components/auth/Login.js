import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Axios from "axios";
import ErrorNotice from "../Misc/ErrorNotice";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try{
    const loginUSer = { email, password };
    const loginRes = await Axios.post(
      "http://localhost:5000/users/login",
      loginUSer
    );
    setUserData({
      token: loginRes.data.token,
      user: loginRes.data.user,
    });
    localStorage.setItem("auth-token", loginRes.data.token);
    history.push("/");
  }catch(err){
    err.response.data.msg && setError(err.response.data.msg);
  }
  };

  return (
    <div className="page">
      <h2>LogIn</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      <form onSubmit={submit}>
        <label>Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}
