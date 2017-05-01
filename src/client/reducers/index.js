import { combineReducers } from 'redux';
import ApolloClient from 'apollo-client';

const client = new ApolloClient({ dataIdFromObject: o => o.id });

export default combineReducers({
  apollo: client.reducer()
});
