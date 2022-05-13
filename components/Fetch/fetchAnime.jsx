import { animeFetcher } from "aniwayscrap-api";
const IAnimeConfig = {
  baseUrl: "https://ww2.gogoanimes.org",
  apiBaseUrl: "https://ajax.gogo-load.com",
};
export const fetchAnime = new animeFetcher(IAnimeConfig);
