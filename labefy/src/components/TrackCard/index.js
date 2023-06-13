import React from "react";
import styled from "styled-components";

const TrackCardContainer = styled.div`
  margin: 20px;
  display: flex;
  flexx-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }
`;

const TrackContainer = styled.p`
  margin: 10px;
`;

const ArtistContainer = styled.p`
  margin-right: 10px;
`;
const DeleteButton = styled.p`
  color: red;
`;

const TrackCard = (props) => {
  return (
    <TrackCardContainer>
      <div>
        <TrackContainer>{props.trackName}</TrackContainer>
        <ArtistContainer>{props.artist}</ArtistContainer>
        <DeleteButton>X</DeleteButton>
      </div>
      <audio controls="controls">
        <source src={props.url} type="audio/ogg" />
      </audio>
    </TrackCardContainer>
  );
};

export default TrackCard;
