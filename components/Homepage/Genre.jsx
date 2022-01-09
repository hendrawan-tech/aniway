import React from "react";
import { fetchAnime } from "../Fetch/fetchAnime";

const Genre = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(async () => {
    let fetch = await fetchAnime.genres();
    setData(fetch);
  }, []);
  return (
    <div className='flex flex-col gap-3'>
      <div>
        <h1 className='text-4xl text-white font-bold'>Genre's</h1>
        <p className='text-gray-500 text-xl'>Available anime genre's</p>
      </div>
      <ul className='columns-2 gap-x-2 text-gray-400 text-sm'>
        {data.map((item, i) => {
          return <li className="" key={i}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Genre;
