import { GlobalStyled } from "./GlobalStyled";
import Router from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react";
import {GlobalState} from "./context/GlobalState"


function App() {
  return (
    <>
    <GlobalStyled/>
    <ChakraProvider>
      <GlobalState>
    <Router/>
    </GlobalState>
    </ChakraProvider>
   
    </>
  );
}

export default App;
