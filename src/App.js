import styled from 'styled-components'

import './App.css';
import MenuContainer from './containers/MenuContainer.js';
import MainContainer from './containers/MainContainer.js';

// styling
  const AppContainer = styled.div`
    display: flex;
  `

function App() {

  return (
    <AppContainer className="App">
      <MenuContainer />
      <MainContainer />
    </AppContainer>
  );
}

export default App;
