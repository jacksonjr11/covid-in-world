import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { GlobalProvider } from "./contexts/global";
import { Country } from "./pages/Country";
import { Curiosities } from "./pages/Curiosities";
import { Home } from "./pages/Home";
import { Container } from "./styles/global";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <GlobalProvider>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/curiosities" element={<Curiosities />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </Container>
      <GlobalStyles />
    </GlobalProvider>
  );
}

export default App;
