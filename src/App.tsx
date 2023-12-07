import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/login/loginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginForm/>
      </header>
    </div>
  );
}

export default App;
