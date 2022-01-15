import "./App.css";

import { Route, Switch } from "react-router-dom";

import { Animations } from "./Animations";
import { Blank } from "./Blank";
import { Borders } from "./Borders";
import { Buttonss } from "./Buttonss";
import { Cards } from "./Cards";
import { Charts } from "./Charts";
import { Colors } from "./Colors";
import { Dashboard } from "./Dashboard";
import { Errorpage } from "./Errorpage";
import { ForgotPassword } from "./ForgotPassword";
import { Login } from "./Login";
import { Navigation } from "./Navigation";
import { Other } from "./Other";
import { Register } from "./Register";
import { Tables } from "./Tables";

function App() {
  return (
    <div className="App">
      <div className="outer_box">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/buttons">
            <Buttonss />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/colors">
            <Colors />
          </Route>
          <Route path="/borders">
            <Borders />
          </Route>
          <Route path="/animations">
            <Animations />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgot">
            <ForgotPassword />
          </Route>
          <Route path="/error">
            <Errorpage />
          </Route>
          <Route path="/blank">
            <Blank />
          </Route>
          <Route path="/tables">
            <Tables />
          </Route>
          <Route path="/charts">
            <Charts />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
