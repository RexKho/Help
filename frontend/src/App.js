import React from "react";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import BusinessIndexPage from "./components/BusinessIndexPage";
import BusinessShowPage from "./components/BusinessShowPage";
import EditFrom from "./components/EditReview";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navigation />
      <Switch>
        <Route exact path="/">
          <BusinessIndexPage />
        </Route>

        <Route path="/businesses/:businessId">
          <BusinessShowPage />
        </Route>

        <Route exact path="/:businessId/editreview/:reviewId">
          <EditFrom />
        </Route>

        <Route path='/login'>
          <LoginFormPage />
        </Route>

        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        
      </Switch>

      <Footer/>
    </>
    
  );
}

export default App;
