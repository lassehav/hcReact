import React from 'react';
import App from './components/containers/AppContainer';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';


import IndexPage from './pages/containers/IndexPageContainer'
import PersonPage from './pages/containers/PersonPageContainer';
const Root = props => {

  const { store, router, history } = props;


  // context 
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} >
          <IndexRoute component={IndexPage} />
          <Route path="person/:id" component={PersonPage} />
        </Route>
      </Router>      
    </Provider>
  );
};

export default Root;
