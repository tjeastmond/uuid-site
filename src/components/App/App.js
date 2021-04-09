import styled from 'styled-components';

const AppContainer = styled.div`
  background: #fff;
  height: 100vh;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export default function App() {
  return (
    <AppContainer>
      <h1>UUID Generator</h1>
    </AppContainer>
  );
}
