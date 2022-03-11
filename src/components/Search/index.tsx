import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CountryModel } from "../../models/country.model";
import { Container, ContainerRows } from "./styles";

interface PropsComponent {
  data: CountryModel[];
}

export function Search({data}: PropsComponent) {
  return (
    <Container>
      <input type="text" placeholder="Buscar por País"/>
      <BiSearch />
      <ContainerRows>
        {data.map((el,index)=> (
        <Link to={'/country'} key={index}>
          <img src={el.countryInfo.flag} alt="flag" />
          {el.country}
        </Link>
        ))}
      </ContainerRows>
    </Container>
  );
}
