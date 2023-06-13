import React from "react";
import styled from "styled-components";
import PlaylistCard from "../PlaylistCard";

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class Playlist extends React.Component {
  state = {
    playlists: [
      {
        id: "d1c1900c-0893-424a-9d52-2304e3f28f7e",
        name: "rock",
      },
    ],
  };

  render() {
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <PlaylistCard
          key={playlist.id}
          changePage={this.props.changePage}
          name={playlist.name}
        />
      );
    });
    return (
      <PlaylistContainer>
        {playlists}
        <button onClick={() => this.props.changePage("playlistDetail")}>
          Abrir playlist
        </button>
      </PlaylistContainer>
    );
  }
}

export default Playlist;
