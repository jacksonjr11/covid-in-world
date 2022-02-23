import axios from "axios";
import { BASE_URL } from "../constants";

export const fetchInfoGlobal = async function () {
  const response = await axios.get(`${BASE_URL}/all`);
  return response.data;
};

export const fetchInfoContinents = async function () {
  const response = await axios.get(`${BASE_URL}/continents`);
  return response.data;
};

export const fetchInfoCountries = async function () {
  const response = await axios.get(`${BASE_URL}/countries`);
  return response.data;
};