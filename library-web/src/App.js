import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './App.css';
import constants from './constants';
import routes from './routes';
import Loader from './partials/Loader';

function App() {
  
  const Library = React.lazy(() => import('./Library'));
  const { ROUTES } = constants || {};

  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<Loader />}>
          <Library>
            <Switch>
              <Route path={ROUTES.LOGIN} exact component={routes.LOGIN} />
              <Route path={ROUTES.BOOK} exact component={routes.BOOK} />
              <Route path={ROUTES.HOME} exact component={routes.Home} />
            </Switch>
          </Library>  
        </Suspense>  
      </Router>
    </Provider>
  );
}

export default App;
