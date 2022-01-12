import React, { useState, useRef, useEffect } from "react";
import SearchList from "./SearchList";
import { fetchAnime } from "../Fetch/fetchAnime";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [focus, setFocus] = useState("visible");
  const input = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (input.current && !input.current.contains(event.target)) {
        setFocus("invisible");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [input]);
  const handleSearch = (e) => {
    setTimeout(() => {
      setQuery(e.target.value);
    }, 500);
    if (e.target.value.length < 2) return setData([]);
    e.preventDefault();
  };
  useEffect(() => {
    async function fetchData() {
      let fetch = await fetchAnime.search(query);
      setData(fetch.data);
    }
    fetchData();
  }, [query]);
  return (
    <div ref={input} className='w-full md:w-[17vw]'>
      <input
        onChange={handleSearch}
        onFocus={() => setFocus("visible")}
        placeholder='Search'
        className='w-full md:w-[17vw] py-3 px-5 border border-gray-500 text-white rounded-full bg-transparent outline-none whitespace-nowrap overflow-hidden'
      />
      <div className={`${focus} absolute z-10`}>
        {data && data.length > 0 && <SearchList data={data} />}
      </div>
    </div>
  );
};

export default Search;
