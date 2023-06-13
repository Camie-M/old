import React from "react";
import styled from "styled-components";
import TrackCard from "../TrackCard";

const PlaylistDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TrackerCreationForm = styled.form`
  width: 100vh;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
  }
`;

class PlaylistDetail extends React.Component {
  state = {
    tracks: [
      {
        id: "46899dc3-420b-431c-bd4e-05f6d1d03310",
        name: "Rock All Around the Clock",
        artist: "Bill Haley & His Comets",
        url: "https://www.youtube.com/watch?v=ZgdufzXvjqw",
      },
    ],
  };

  render() {
    const tracks = this.state.tracks.map((track) => {
      return (
        <TrackCard
          key={track.id}
          trackName={track.name}
          artist={track.artist}
          url={track.url}
        />
      );
    });

    return (
      <PlaylistDetailContainer>
        <TrackerCreationForm>
          <div>
            <label>Nome da música</label>
            <input />
          </div>

          <div>
            <label>Artista</label>
            <input />
          </div>

          <div>
            <label>URL</label>
            <input />
          </div>

          <button type="submit">Adicionar música</button>
        </TrackerCreationForm>
        {tracks}
        <button onClick={() => this.props.changePage("playlist")}>
          Voltar para playlists
        </button>
      </PlaylistDetailContainer>
    );
  }
}

export default PlaylistDetail;
