import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/index";

interface GlobalProviderProps {
  children: ReactNode;
}

interface GlobalDataContext {
  list: DataCovid[];
  loading: boolean;
}

interface DataCovid {
  active: number;
  deaths: number;
  cases: number;
  tests: number;
  recovered: number;
  vaccine?: number;
  todayRecovered: number;
  todayDeaths: number;
  todayCases: number;
  loading: boolean;
  continent?: string;
}

export const GlobalContext = createContext<GlobalDataContext>(
  {} as GlobalDataContext
);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [data, setData] = useState<GlobalDataContext>({} as GlobalDataContext);

  async function getContinentsAll() {
    data.loading = true;
    await axios.get(`${BASE_URL}/continents`).then((res) => {
      setData((prev) => ({ ...prev, list: res.data }));
      data.loading = false;
    });
  }

  async function getInfoGlobal() {
    data.loading = true;
    await axios.get(`${BASE_URL}/all`).then((res) => {
      setData((prev) => ({ ...prev, list: [res.data, ...prev.list] }));
      data.loading = false;
    });
  }

  async function getVaccineTotal() {
    data.loading = true;
    await axios.get(`${BASE_URL}/vaccine/coverage`).then((res) => {
      let list = Object.values(res.data);
      let totalVaccine = Number(list[list.length - 1]);
      // return setData((prev) => ({ ...prev, vaccine: totalVaccine }));
      data.loading = false;
    });
  }

  async function getCountriesAll() {
    data.loading = true;
    await axios.get(`${BASE_URL}/countries`).then((res) => {
      data.loading = false;
    });
  }

  useEffect(() => {
    async function fetch() {
      await getContinentsAll();
      await getInfoGlobal();
      await getCountriesAll();
      await getVaccineTotal();
    }
    fetch();
  }, []);

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
