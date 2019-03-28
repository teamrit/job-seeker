import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Header } from "./header.component";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@primer/css/core/index.scss";
import "@primer/css/product/index.scss";
import "@primer/css/marketing/index.scss";
import "./styles.css";
import fetch from "isomorphic-fetch";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { store } from "./redux/store";
import { JobSeeker } from "./job.seeker";
import { DefaultPage } from "./default.page";

export class App extends React.Component {
  state = {
    markdown: "Something"
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/rexxars/react-markdown/master/README.md"
    )
      .then(r => r.text())
      .then(r => {
        this.setState({ markdown: r });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <Router className="home">
        <Header />
        <Switch>
          <Route path="/" exact component={DefaultPage} />
          <Route path="/job-seeker/" component={JobSeeker} />
        </Switch>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
