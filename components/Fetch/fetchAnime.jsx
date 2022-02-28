import { animeFetcher } from "aniwayscrap-api";
const IAnimeConfig = {
  baseUrl: "https://gogoanime.fi/",
  apiBaseUrl: "https://ajax.gogo-load.com",
};
export const fetchAnime = new animeFetcher(IAnimeConfig);
