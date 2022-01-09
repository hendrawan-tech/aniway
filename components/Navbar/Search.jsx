import React from "react";
import SearchList from "./SearchList";
import { fetchAnime } from "../Fetch/fetchAnime";

const Search = () => {
  const [query, setQuery] = React.useState("");
  const [data, setData] = React.useState([]);
  const [focus, setFocus] = React.useState("visible");
  const input = React.useRef();
  function clickOutside(ref) {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setFocus("invisible");
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  clickOutside(input);
  const handleSearch = (e) => {
    if (e.target.value.length < 1) return setData([]);
    setQuery(e.target.value);
    e.preventDefault();
  };
  React.useEffect(async () => {
    let fetch = await fetchAnime.search(query);
    setData(fetch.data);
  }, [query]);
  return (
    <div ref={input}>
      <input
        onChange={handleSearch}
        onFocus={() => setFocus("visible")}
        placeholder='Search'
        className='py-3 px-5 border border-gray-500 text-white rounded-full bg-transparent outline-none whitespace-nowrap overflow-hidden w-[17vw]'
      />
      <div className={`${focus} absolute`}>
        {data && data.length > 0 && <SearchList data={data} />}
      </div>
    </div>
  );
};

export default Search;
