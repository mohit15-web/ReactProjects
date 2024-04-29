import React from "react";

function Preview({ card, title }) {
  console.log(card);
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="mt-10 font-bold text-xl">{title} </h1>
      <img
        src={card}
        alt=""
        className="mt-10 rounded-lg shadow-2xl shadow-black object-cover transfrom hover:scale-110 duration-200 ease-in-out"
      />
    </div>
  );
}

export default Preview;
