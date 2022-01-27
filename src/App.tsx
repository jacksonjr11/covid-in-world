import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Container } from "./styles/global";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/teste" element={<Search/>}/>
        </Routes>
      </Container>
      <GlobalStyles />
    </>
  );
}

export default App;
