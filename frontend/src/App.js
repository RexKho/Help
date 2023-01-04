import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BusinessIndexPage from "./components/BusinessIndexPage";
import BusinessShowPage from "./components/BusinessShowPage";

function App() {
  return (
    <>
    <Navigation />
      <Switch>
        <Route exact path="/">
          <BusinessIndexPage />
        </Route>
        <Route path="/business/:businessId">
          <BusinessShowPage />
        </Route>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
      </Switch>
    </>
    
  );
}

export default App;
