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

  const { data: world } = useQuery<any>("world", fetchInfoGlobal, staleTime);
  const { data: continents } = useQuery<DataCovid[]>(
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

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
