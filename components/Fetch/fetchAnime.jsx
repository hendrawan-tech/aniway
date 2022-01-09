import { Fetcher } from "./index";
const gogoConfig = {
  baseUrl: "https://www3.gogoanime.cm",
  apiBaseUrl: "https://ajax.gogo-load.com",
};
export const fetchAnime = new Fetcher(gogoConfig);
