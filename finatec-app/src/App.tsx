import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import { Login } from './view/login';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bem vindo à FINATEC</h1>
        </header>
        <Login></Login>
      </div>
    );
  }
}

export default App;
