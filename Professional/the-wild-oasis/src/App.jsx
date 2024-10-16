import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: red; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">Orlah</Heading>
          <div>
            <Button variation="primary" size="medium">
              Hello World
            </Button>
            <Button variation="secondary" size="small">
              Hello World
            </Button>
          </div>
        </Row>
        <Row type="vertical">
          <Heading as="h2">Orlah</Heading>
          <form action="">
            <Input type="number" placeholder="Number of Guests" />
            <Input type="number" placeholder="Number of Guests" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
