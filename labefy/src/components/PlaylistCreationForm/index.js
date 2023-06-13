import React from "react";
import styled from "styled-components";

const PlaylistCreationFormContainer = styled.div`
  height: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlaylistForm = styled.form`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

class PlaylistCreationForm extends React.Component {
  state = {};
  render() {
    return (
      <PlaylistCreationFormContainer>
        <h1>Cadastrar nova playlist</h1>
        <PlaylistForm>
          <label> nova playlist</label>
          <input placeholder="Nome da playlist" />
          <button>Cadastrar playlist</button>
        </PlaylistForm>
      </PlaylistCreationFormContainer>
    );
  }
}

export default PlaylistCreationForm;
