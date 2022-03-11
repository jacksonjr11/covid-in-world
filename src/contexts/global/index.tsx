import { AxiosResponse } from "axios";
import { createContext, FunctionComponent, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { CountryModel } from "../../models/country.model";
import {
  fetchInfoContinents,
  fetchInfoGlobal,
  fetchInfoCountries
} from "../../services/global.service";

interface GlobalDataContext {
  list: DataCovid[];
  countries: CountryModel[];
}

interface DataCovid {
  active: number;
  deaths: number;
  cases: number;
  tests: number;
  recovered: number;
  todayRecovered: number;
  todayDeaths: number;
  todayCases: number;
  continent?: string;
}

export const GlobalContext = createContext<GlobalDataContext>(
  {} as GlobalDataContext
);

export const GlobalProvider: FunctionComponent = ({ children }) => {
  const [data, setData] = useState<GlobalDataContext>({
    list: [],
    countries: [],
  });
  const staleTime = {
    staleTime: 60000 * 120, // 2 hours
  };

  const {
    data: worldRequest,
    isLoading: isLoadingWorld,
    isError: isErrorWorld,
    error: errorWorld,
  } = useQuery<AxiosResponse<DataCovid>, Error>(
    "world",
    fetchInfoGlobal,
    staleTime
  );

  const {
    data: continentsRequest,
    isLoading: isLoadingContinents,
    isError: isErrorContinents,
    error: errorContinents,
  } = useQuery<AxiosResponse<DataCovid[]>, Error>(
    "continents",
    fetchInfoContinents,
    staleTime
  );

  const { data: countriesRequest } = useQuery<AxiosResponse<CountryModel[]>, Error>(
    "countries",
    fetchInfoCountries,
    staleTime
  );

  useEffect(() => {
    const countries= countriesRequest?.data;
    if (countries) setData((prev) => ({ ...prev, countries: countries }));

  }, [countriesRequest])

  useEffect(() => {
    const continents = continentsRequest?.data;
    continents?.forEach((continent) => {
      setData((prev) => ({
        ...prev,
        list: [...prev.list, continent],
      }));
    });
  }, [continentsRequest]);

  useEffect(() => {
    const world = worldRequest?.data;
    if (world) setData((prev) => ({ ...prev, list: [world, ...prev.list] }));
  }, [worldRequest]);

  if (isLoadingWorld || isLoadingContinents) {
    return <h1>Carregando</h1>;
  }

  if (isErrorWorld || isErrorContinents) {
    if (errorWorld) {
      return <h1>{errorWorld?.message}</h1>;
    }
    return <h1>{errorContinents?.message}</h1>;
  }

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
