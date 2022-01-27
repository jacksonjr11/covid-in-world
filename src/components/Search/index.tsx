import { BiSearch } from "react-icons/bi";
import { Container } from "./styles";

export function Search() {
  return (
    <Container>
      <input type="text" placeholder="Buscar por País"/>
      <BiSearch />
    </Container>
  );
}
