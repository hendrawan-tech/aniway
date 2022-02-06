import { animeFetcher } from "aniwayscrap-api";
const IAnimeConfig = {
  baseUrl: "https://www1.gogoanime.pe",
  apiBaseUrl: "https://ajax.gogo-load.com",
};
export const fetchAnime = new animeFetcher(IAnimeConfig);
