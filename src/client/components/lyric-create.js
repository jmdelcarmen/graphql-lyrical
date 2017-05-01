import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }
  onAddLyrics = e => {
    e.preventDefault();
    const { id , mutate } = this.props;
    const { content } = this.state;
    mutate({
      variables: { content, songId: id }
    })
    .then(data => {
      this.setState({ content: '' });
      //refetch data of parent component
      // this.props.refetch();
    });
  }
  render() {
    return(
      <form onSubmit={this.onAddLyrics}>
          <label>Create a lyric</label>
          <input
            autoFocus
            value={this.state.content}
            ref={content => this.content = content}
            onChange={() => this.setState({ content: this.content.value })} />
      </form>
    );
  }
}
const mutation = gql`
  mutation AddLyric($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
