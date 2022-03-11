import { api } from "./api.service";

const fetchInfoGlobal = () => {
  return api.get<any>("/all");
};

const fetchInfoContinents = () => {
  return api.get("/continents");
};

const fetchInfoCountries = () => {
  return api.get("/countries");
};

export { fetchInfoGlobal,fetchInfoContinents, fetchInfoCountries }
