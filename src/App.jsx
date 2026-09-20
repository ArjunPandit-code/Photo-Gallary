import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [index, setIndex] = useState(1);
  const [response, setResponse] = useState([]);

  //Fetching data from api
  async function getData() {
    try {
      const fetData = await axios.get(
        `https://picsum.photos/v2/list?page=${index}&limit=12`,
      );
      setResponse(fetData.data);
    } catch (error) {
      console.error(`Error occured in fetching ${error}`);
    }
  }

  useEffect(
    function () {
      getData();
      console.log("data is here");
    },
    [index],
  );
  let img = `loading...`;

  return (
    <div className="min-h-screen bg-black p-3 sm:p-6 lg:px-6 lg:py-8">
      <h1 className="mb-6 mt-2 flex items-center justify-center gap-1 text-3xl font-extrabold tracking-tight text-white sm:mb-10 sm:mt-4 sm:gap-1.5 sm:text-5xl lg:text-6xl">
  <span>Wallpaper</span>
  <span className="rounded-md bg-[#ff9000] px-2 py-0.5 text-black sm:rounded-lg sm:px-3 sm:py-1">
    Gallery
  </span>
</h1>

      <div className="grid w-full grid-cols-2 items-start gap-x-3 gap-y-5 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-4">
        {response.map((elem) => (
          <Card
            key={elem.id}
            id={elem.id}
            author={elem.author}
            url={elem.url}
            width={elem.width}
            height={elem.height}
          />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4">
        {index > 1 && (
          <button
            className="rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-sm font-medium text-gray-200 transition hover:border-indigo-500/50 hover:bg-gray-800 active:scale-95 sm:px-5 sm:text-base"
            onClick={function () {
              setIndex(index - 1);
            }}
          >
            Prev
          </button>
        )}

        <h2 className="min-w-10 text-center text-base font-semibold text-gray-200 sm:text-lg">
          {index}
        </h2>
        <button
          className="rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 active:scale-95 sm:px-5 sm:text-base"
          onClick={function () {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
