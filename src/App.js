import './App.css';
import MenuContainer from './containers/MenuContainer.js';
import MainContainer from './containers/MainContainer.js';
import styled from 'styled-components'

function App() {

  const AppContainer = styled.div`
    display: flex;
  `

  return (
    <AppContainer className="App">
      <MenuContainer />
      <MainContainer />
    </AppContainer>
  );
}

export default App;
