import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import fetchUniqueSong from '../queries/fetchUniqueSong';
import LyricCreate from './lyric-create';

class SongDetail extends Component {
  renderSong = () => {
    const { song } = this.props.data;
    return song ? <h3>
    Title: {song.title}
    </h3>
    : <div>Loading ... </div>
  }
  renderSongLyrics = () => {
    const { song } = this.props.data;
    return song && song.lyrics
      ? song.lyrics.map(({ id, content }) => <li className="collection-item" key={id}>{content}</li>)
      : <div>Loading ... </div>;
  }
  render() {
    const { song } = this.props.data;
    return(
      <div className="container">
        <Link className="btn btn-info" to="/">Back</Link>
        {this.renderSong()}
        <strong>Lyrics</strong>
        <ul className="collection">
          {this.renderSongLyrics()}
        </ul>
        <LyricCreate  id={this.props.params.id}/>
      </div>
    );
  }
}
// refetch={() => this.props.data.refetch()}
export default graphql(fetchUniqueSong, {
  options: props => ({ variables: { id: props.params.id } })
})(SongDetail);
