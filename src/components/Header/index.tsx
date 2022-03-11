import { useContext } from "react";
import { Container, Division } from "./styles";
import { Search } from "../Search";
import { BsInfoCircle } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../contexts/global";

export function Header() {
  const { countries } = useContext(GlobalContext);

  return (
    <Container>
      <Division>
        <BiWorld />
        <Link to={'/'}>COVID-19 NO MUNDO</Link>
      </Division>
      <Division>
        <Search data={countries}/>
      </Division>
      <Division>
        <Link to={`/curiosities`}>CURIOSIDADES</Link>
        <BsInfoCircle />
      </Division>
    </Container>
  );
}
