import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/index";

interface GlobalProviderProps {
  children: ReactNode;
}

interface GlobalDataContext {
  deaths: number;
  cases: number;
  tests: number;
  vaccine: number;
  todayRecovered: number;
  todayDeaths: number;
  todayCases: number;
  loading: boolean;
}

export const GlobalContext = createContext<GlobalDataContext>(
  {} as GlobalDataContext
);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [data, setData] = useState<GlobalDataContext>({} as GlobalDataContext);

  async function getCountriesAll() {
    data.loading = true;
    await axios.get(`${BASE_URL}/countries`);
  }

  async function getInfoGlobal() {
    data.loading = true;
    await axios.get(`${BASE_URL}/all`).then((res) => {
      return setData(res.data);
    });
  }

  async function getContinentsAll() {
    data.loading = true;
    await axios.get(`${BASE_URL}/countries`);
  }

  useEffect(() => {
    getInfoGlobal();
    getContinentsAll();
    getCountriesAll();
  }, []);

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
