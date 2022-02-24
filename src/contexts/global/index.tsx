import { createContext, ReactNode, useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  fetchInfoContinents,
  fetchInfoCountries,
  fetchInfoGlobal,
} from "../../services/requestsGlobal";

interface GlobalProviderProps {
  children: ReactNode;
}

interface GlobalDataContext {
  list: DataCovid[];
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

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [data, setData] = useState<GlobalDataContext>({
    list: [],
  });
  const staleTime = {
    staleTime: 60000 * 120, // 2 hours
  };

  const {
    data: world,
    isLoading: isLoadingWorld,
    isError: isErrorWorld,
    error: errorWorld,
  } = useQuery<any, Error>("world", fetchInfoGlobal, staleTime);

  const {
    data: continents,
    isLoading: isLoadingContinents,
    isError: isErrorContinents,
    error: errorContinents,
  } = useQuery<DataCovid[], Error>(
    "continents",
    fetchInfoContinents,
    staleTime
  );

  const { data: countries } = useQuery(
    "countries",
    fetchInfoCountries,
    staleTime
  );

  useEffect(() => {
    continents?.map((continent) => {
      return setData((prev) => ({
        ...prev,
        list: [...prev.list, continent],
      }));
    });
  }, [continents]);

  useEffect(() => {
    if (world) setData((prev) => ({ ...prev, list: [world, ...prev.list] }));
  }, [world]);

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
}
