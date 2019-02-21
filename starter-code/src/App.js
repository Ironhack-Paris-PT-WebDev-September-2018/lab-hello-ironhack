import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="first-half">
          <div className="container">
            <nav
              className="navbar is-transparent"
              role="navigation"
              aria-label="main navigation"
            >
              <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                  <img
                    src="/images/ironhack-logo.svg"
                    width="112"
                    height="28"
                  />
                </a>
                <a
                  role="button"
                  className="navbar-burger burger"
                  aria-label="menu"
                  aria-expanded="false"
                  data-target="navbarBasicExample"
                >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start" />
              </div>
            </nav>
            <div className="columns">
              <div className="column is-one-third">
                <h1 className="main-title">Say hello to ReactJS</h1>
                <p>
                  You will learn front end framework from scratch to become a
                  Nina developer
                </p>
                <a className="button">Awesome !</a>
              </div>
              <div className="column">
                <img src="/images/react-logo.svg" width="300" />
                <img src="/images/react-logo.svg" width="200" />
                <img src="/images/react-logo.svg" width="100" />
                <img src="/images/react-logo.svg" width="150" />
                <img src="/images/react-logo.svg" width="70" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="columns" id="four-elements">
            <div class="column">
              <img src="/images/icon1.png" width="100" />
              <h3>Declarative</h3>
              <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div class="column">
              <img src="/images/icon2.png" width="100" />
              <h3>Declarative</h3>
              <p>Build encapsulted components that manage their state</p>
            </div>
            <div class="column">
              <img src="/images/icon3.png" width="100" />
              <h3>Declarative</h3>
              <p>Build encapsulted components that manage their state</p>
            </div>
            <div class="column">
              <img src="/images/icon4.png" width="100" />
              <h3>Declarative</h3>
              <p>Build encapsulted components that manage their state</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
