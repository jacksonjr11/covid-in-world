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
  vaccine: number;
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
    setData((prev) => ({ ...prev, loading: true }));
    await axios.get(`${BASE_URL}/continents`).then((res) => {
      setData((prev) => ({ ...prev, list: res.data }));
    });
    setData((prev) => ({ ...prev, loading: false }));
  }

  async function getInfoGlobal() {
    setData((prev) => ({ ...prev, loading: true }));
    await axios.get(`${BASE_URL}/all`).then((res) => {
      setData((prev) => ({ ...prev, list: [res.data, ...prev.list] }));
    });
    setData((prev) => ({ ...prev, loading: false }));
  }

  async function getVaccineTotal() {
    setData((prev) => ({ ...prev, loading: true }));
    await axios.get(`${BASE_URL}/vaccine/coverage`).then((res) => {
      let list = Object.values(res.data);
      let totalVaccine = Number(list[list.length - 1]);
      // setData((prev) => ({ ...prev, list: [...prev.list , list[0{ vaccine: totalVaccine }] }));
    });
    setData((prev) => ({ ...prev, loading: false }));
  }

  async function getCountriesAll() {
    setData((prev) => ({ ...prev, loading: true }));
    await axios.get(`${BASE_URL}/countries`).then((res) => {});
    setData((prev) => ({ ...prev, loading: false }));
  }

  useEffect(() => {
    async function fetch() {
      await getContinentsAll();
      await getInfoGlobal();
      await getVaccineTotal();
      await getCountriesAll();
    }
    fetch();
  }, []);

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
}
