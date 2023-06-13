import React from "react";
import styled from "styled-components";

import Playlist from "./../Playlists";
import PlaylistDetail from "./../PlaylistDetail";

const PlaylistManagerContainer = styled.div``;

class PlaylistManagerPage extends React.Component {
  state = {
    currentPage: "playlist",
  };

  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };

  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlist") {
        return <Playlist changePage={this.changePage} />;
      } else if (this.state.currentPage === "playlistDetail") {
        return <PlaylistDetail changePage={this.changePage} />;
      }
    };
    return (
      <PlaylistManagerContainer>{renderCurrentPage()}</PlaylistManagerContainer>
    );
  }
}

export default PlaylistManagerPage;
