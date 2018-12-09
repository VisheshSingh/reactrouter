import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Post from "./Post";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
