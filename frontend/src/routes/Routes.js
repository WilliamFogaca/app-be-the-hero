import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Components */
import Logon from '../pages/Logon/index';
import Register from '../pages/Register/index';
import Profile from '../pages/Profile/index';
import NewIncident from '../pages/NewIncident/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />

        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;