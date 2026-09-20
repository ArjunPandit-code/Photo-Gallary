import React, { useState } from "react";

const Card = (props) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-black shadow-md shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10">
      <a href={`${props.url}`} className="block">
        {!loaded && (
          <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-800 text-xs text-gray-400 sm:text-sm">
            Loading...
          </div>
        )}
        <img
          className={`h-32 w-full object-cover sm:h-44 md:h-48 lg:h-52 ${loaded ? "opacity-100" : "opacity-0"}`}
          src={`https://picsum.photos/id/${props.id}/${props.width}/${props.height}`}
          alt={`author : ${props.author}`}
          width={props.width}
          height={props.height}
          onLoad={() => { 
            setLoaded(true);
          }}
        />
        <div className="p-2 sm:p-3">
          <h2 className="truncate text-xs font-medium text-gray-200 sm:text-sm flex justify-center">
            {props.author}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default Card;