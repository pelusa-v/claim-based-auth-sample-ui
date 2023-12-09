import React from "react";
import LoginForm from "../components/login/loginForm";

interface IAppProps {
}

const Signup = () => {
  return (
    <div className="App">
        <header className="App-header">
        <LoginForm/>
        </header>
    </div>
  );
};

export default Signup;
