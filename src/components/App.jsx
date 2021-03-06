import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StoreContext, initialState } from '../utils/store.js';

const LandingPage = lazy(() => import('../pages/LandingPage.jsx'));
const Company_Dashboard = lazy(() => import('../pages/Company_Dashboard'));
const User_Dashboard = lazy(() => import('../pages/User_Dashboard'));

const App = () => {
  const [state, setState] = useState(initialState);

  return (
    <StoreContext.Provider value={{ state, setState }}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/company' component={Company_Dashboard} />
            <Route exact path='/user' component={User_Dashboard} />
          </Switch>
        </Suspense>
      </Router>
    </StoreContext.Provider>
  );
};

export default App;
