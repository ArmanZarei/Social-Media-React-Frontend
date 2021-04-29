import React from "react";
import './App.css';
import Login from "./pages/Login";
import Nav from "./components/Nav";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav/>

            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    </div>
  );
}

export default App;
