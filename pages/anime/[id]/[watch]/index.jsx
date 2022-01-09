import React from "react";
import Genre from "../../../../components/Homepage/Genre";
import Navbar from "../../../../components/Navbar/Navbar";
const index = () => {
  const [id, setId] = React.useState("");
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    id &&
      fetch(URL)
        .then((response) => response.json())
        .then((json) => setData([json]));
  }, [id]);
  return (
    <>
      <Navbar />
      <div className='px-[5vw] py-5 grid grid-cols-5 gap-10'>
        <div className='col-span-4'>
          {data &&
            data.map((e) => {
              <video src={e.data.documents[0].video} controls />;
            })}
        </div>
        <Genre />
      </div>
    </>
  );
};

export default index;
