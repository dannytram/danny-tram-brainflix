import React from "react";
import "./styles/main.css";
import Header from "./components/Header"
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import history from "./components/Utility/history";
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Router history = {history}>
          <Header />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/video/:id" component={HomePage} />
            <Route path="/upload" component={UploadPage} />
          </Switch>
        </Router>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
