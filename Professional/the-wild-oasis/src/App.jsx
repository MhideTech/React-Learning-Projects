import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

function App() {
  return <>
  <GlobalStyles />
    <H1>The wild Oasis</H1>
    <Button>Check In</Button>
    <Button>Check Out</Button>
    <Input type="number" placeholder="Number of guests" />
  </>;
}

export default App;
