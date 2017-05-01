import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import fetchSongs from '../queries/fetchsongs';

class SongItem extends Component {
  onDeleteSong = () => {
    const { song: { id }, mutate } = this.props;
    mutate({ variables: { id }, refetchQueries: [{ query: fetchSongs }] })
      .then(data => console.log(data));
  }
  render() {
    return(
      <li className="collection-item">
        <button
          className="btn btn-floating"
          onClick={this.onDeleteSong}>
          <i className="material-icons">delete</i>
        </button>
        <div>
          {this.props.song.title}
          <Link to={`/songs/${this.props.song.id}`}>View Song</Link>
        </div>
      </li>
    );
  }
}
const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongItem);
