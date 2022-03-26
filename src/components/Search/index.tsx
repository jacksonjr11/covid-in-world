import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CountryModel } from "../../models/country.model";
import { Container, ContainerRows } from "./styles";

interface PropsComponent {
  data: CountryModel[];
}

export function Search({ data }: PropsComponent) {
  const [showList, setShowList] = React.useState<boolean>(false);
  const [countries, setCountries] = React.useState<CountryModel[]>(data);
  const [search, setSearch] = React.useState<string>("");

  const handleListCountries = () => {
    setTimeout(() => {
      setShowList((old) => !old);
    }, 100);
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Buscar por País"
        onFocus={handleListCountries}
        onBlur={handleListCountries}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <BiSearch />
      <ContainerRows showList={showList}>
        <div>
          {countries
            .filter((country) =>
              country.country.toLowerCase().includes(search.toLowerCase())
            )
            .map((el, index) => (
              <Link to={`/country/${el.country}`} key={index}>
                <img src={el.countryInfo.flag} alt="flag" />
                <span>{el.country}</span>
              </Link>
            ))}
        </div>
      </ContainerRows>
    </Container>
  );
}
