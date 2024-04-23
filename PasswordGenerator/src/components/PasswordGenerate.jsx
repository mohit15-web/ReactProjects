"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Boxes } from "../ui/Boxes";
import { cn } from "../utils/cn";

export function PasswordGenerate() {
  const [text, setText] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);

  const textRef = useRef(null);

  function HandleClick() {
    window.navigator.clipboard.writeText(text);
    textRef.current?.select();
  }

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let numberStr = "0123456789";
    let symbolStr = "!@#$%&*";
    if (number) str += numberStr;
    if (character) str += symbolStr;

    for (let i = 1; i < length; i++) {
      let random = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(random);
    }

    setText(pass);
  }, [length, character, number]);

  useEffect(() => {
    generatePassword();
  }, [length, number, character]);

  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none " />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Password Generator
      </h1>
      <div className="text-center mt-2 text-neutral-300 relative z-20">
        <input
          type="text"
          value={text}
          onChange={() => setText(e.target.value)}
          placeholder="Enter text..."
          readOnly
          ref={textRef}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-400 mr-4 w-80 text-orange-600"
        />

        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
          onClick={HandleClick}
        >
          Copy
        </button>

        <div className="flex gap-6 mt-10">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length {length}</label>
          </div>

          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              value={number}
              name=""
              id=""
              defaultChecked={number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="number">Number</label>
          </div>

          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              value={character}
              name=""
              id=""
              defaultChecked={character}
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label htmlFor="character">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}
