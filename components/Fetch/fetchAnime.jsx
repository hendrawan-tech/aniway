import { animeFetcher } from "aniwayscrap-api";
const IAnimeConfig = {
  baseUrl: "https://www4.gogoanime.cm",
  apiBaseUrl: "https://ajax.gogo-load.com",
};
export const fetchAnime = new animeFetcher(IAnimeConfig);
