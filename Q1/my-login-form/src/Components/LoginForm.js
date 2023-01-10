import React, { useState } from "react";

const LoginForm = () => {
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    const sendRequest = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await response.json();

      setToken(data.token);
      localStorage.setItem("token", data.token);
      console.log(data);
    };
    sendRequest();
    e.preventDefault();
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {token && <p>Token is : {token}</p>}
    </div>
  );
};

export default LoginForm;
