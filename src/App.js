import React from 'react';
import Navbar from "./components/Navbar";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";
import UserProfile from './components/UserProfile'
import ProviderForm from './components/ProviderForm';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div>Home</div>}
        />
        <Route
          exact
          path='/user/profile'
          component={UserProfile}
        />
           <Route
          exact
          path='/user/create'
          component={ProviderForm}
        />
      </Switch>
    </Container>
  </>
)

export default App; 