import React from 'react';
import styled from 'styled-components';

import MemeContainer from './components/MemeContainer';

const AppContainer = styled.div`
  flex: 1;
  height: 100%;
  min-height: 0;

  padding: 24px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: #232323;
`;

/**
 * The main component.
 */
class App extends React.Component {
  public render() {
    return (
      <AppContainer>
        <MemeContainer />
      </AppContainer>
    );
  }
}

export default App;
