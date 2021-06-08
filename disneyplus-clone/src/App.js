import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details/:id">
            <Detail />
          </Route>
          
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
