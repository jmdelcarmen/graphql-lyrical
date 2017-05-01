import React, { Component } from 'react';
import { Link, hashHistory } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import fetchSongs from '../queries/fetchsongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }
  onCreateSong = e => {
    e.preventDefault();
    this.props.mutate({
      variables: { title: this.state.title },
      refetchQueries: [{ query: fetchSongs }]
    })
    .then(() => hashHistory.push('/'));
  }
  render() {
    return (
      <div className="container">
        <Link
          className="btn btn-info"
          to="/">Back</Link>
        <h3>Create a Song</h3>
        <form onSubmit={this.onCreateSong}>
          <label>Song Title</label>
          <input
            autoFocus
            value={this.state.title}
            ref={title => this.title = title}
            onChange={() => this.setState({ title: this.title.value })}/>
          <label>Song Lyrics</label>
        </form>
      </div>
    );
  }
}
const mutation = gql`
  mutation AddSong ($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
export default graphql(mutation)(SongCreate);
