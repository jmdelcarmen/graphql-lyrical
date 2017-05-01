import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import reducers from './reducers';
import routes from './routes';
import { persistStore, autoRehydrate } from 'redux-persist';

const client = new ApolloClient({ dataIdFromObject: o => o.id });

const store = createStore(
  reducers,
  //initial state
  undefined,
  compose(
    applyMiddleware(client.middleware())
  )
);
render(
  <ApolloProvider store={store} client={client}>
    <Router routes={routes} history={hashHistory} />
  </ApolloProvider>,
  document.querySelector('#root')
);
