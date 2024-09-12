import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

function App() {
  return (
    <>
      <GlobalStyles />
      <Heading as="h1">The wild Oasis</Heading>
      <Heading as="h2">Check in and out</Heading>
      <Button>Check In</Button>
      <Button>Check Out</Button>
      <Heading as="h3">Form</Heading>
      <Input type="number" placeholder="Number of guests" />
    </>
  );
}

export default App;
