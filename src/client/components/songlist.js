import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import fetchSongs from '../queries/fetchsongs';
import SongItem from './song-item';

class SongList extends Component {
  renderSongs = () => {
    return !this.props.data.loading
      ? this.props.data.songs
        .map(song => <SongItem key={song.id} song={song}/>)
      : <div>Loading Songs</div>;
  }
  render() {
    return(
      <div className="container">
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          className="btn btn-floating btn-large red right"
          to="/song/create">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });
const SongListWithData = graphql(fetchSongs)(SongList);
export default connect(mapStateToProps, null)(SongListWithData);
