import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BusinessIndexPage from "./components/BusinessIndexPage";
import BusinessShowPage from "./components/BusinessShowPage";
import GoogleMapp from "./components/GoogleMap";

function App() {
  return (
    <>
    <Navigation />
      <Switch>
        <Route exact path="/">
          {/* <GoogleMapp /> */}
          <BusinessIndexPage />
        </Route>
        <Route path="/businesses/:businessId">
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
