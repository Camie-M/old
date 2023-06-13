import React from "react";
import styled from "styled-components";

import Header from "./components/Header/index";
import PlaylistCreationForm from "./components/PlaylistCreationForm/index";
import PlaylistManagerPage from "./components/PlaylistManagerPage/index";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    currentPage: "playlistCreationForm",
  };

  changePage = (currentPage) => {
    this.setState({ currentPage: currentPage });
  };
  render() {
    const renderCurrentPage = () => {
      if (this.state.currentPage === "playlistCreationForm") {
        return <PlaylistCreationForm />;
      } else if (this.state.currentPage === "playlistManagerPage") {
        return <PlaylistManagerPage />;
      }
    };
    return (
      <AppContainer>
        <Header changePage={this.changePage} />
        <div>{renderCurrentPage()}</div>
      </AppContainer>
    );
  }
}

export default App;
