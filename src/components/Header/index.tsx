import { Container, Division } from "./styles";
import { Search } from "../Search";

import { BsFillInfoCircleFill } from "react-icons/bs";
import { BiWorld } from 'react-icons/bi';

export function Header() {
  return (
    <Container>
      <Division>
        <BiWorld />
        <p>COVID-19 NO MUNDO</p>
      </Division>
      <Division>
        <Search />
      </Division>
      <Division>
        <p>CURIOSIDADES</p>
        <BsFillInfoCircleFill />
      </Division>
    </Container>
  );
}
