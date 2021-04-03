import styled from 'styled-components'

import './App.css';
import MenuContainer from './containers/MenuContainer.js';
import MainContainer from './containers/MainContainer.js';

// styling
  const AppContainer = styled.div`
    display: flex;
    background: #252A2E;
    height: 100vh;

    @media only screen and (max-width: 1199px) {
      flex-direction: column;
    }
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
