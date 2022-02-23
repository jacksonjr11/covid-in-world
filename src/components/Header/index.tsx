import { Container, Division } from "./styles";
import { Search } from "../Search";

import { BsInfoCircle } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Division>
        <BiWorld />
        <Link to={`/`}>COVID-19 NO MUNDO</Link>
      </Division>
      <Division>
        <Search />
      </Division>
      <Division>
        <Link to={`/curiosities`}>CURIOSIDADES</Link>
        <BsInfoCircle />
      </Division>
    </Container>
  );
}
