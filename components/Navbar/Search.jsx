import React, { useState, useRef, useEffect } from "react";
import SearchList from "./SearchList";
import { fetchAnime } from "../Fetch/fetchAnime";

const Search = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [focus, setFocus] = useState("visible opacity-100");
  const input = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (input.current && !input.current.contains(event.target)) {
        setFocus("invisible opacity-0");
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
    <div ref={input} className='w-full md:w-[17vw] relative'>
      <input
        onChange={handleSearch}
        onFocus={() => setFocus("visible")}
        placeholder='Search'
        spellCheck='false'
        className='z-20 relative w-full md:w-[17vw] py-3 px-5 border border-gray-500 text-white rounded-full bg-[#192026] focus:bg-white focus:text-black transition-all outline-none whitespace-nowrap overflow-hidden'
      />
      <div className={`${focus} absolute -mt-6 z-10 transition-all`}>
        {data && data.length > 0 && <SearchList data={data} />}
      </div>
    </div>
  );
};

export default Search;
