import React from 'react';
import { Route, IndexRoute } from 'react-router';
import SongList from './components/songlist';
import SongCreate from './components/songcreate';
import SongDetail from './components/song-detail-page';


const App = () => <h1>My App</h1>

export default (
  <Route>
    <IndexRoute component={SongList} />
    <Route path="/" component={SongList} />
    <Route path="/song/create" component={SongCreate} />
    <Route path="/songs/:id" component={SongDetail}/>
  </Route>
);
