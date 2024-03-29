import AutoCompleteItem from "./auto_complete_item";
import React, { useEffect, useState } from "react";
import getWords from "../data/words";

const AutoComplete = () => {
  const [Words, setWords] = useState([]);
  const [showupWords, setShowupWords] = useState([]);
  const [defaultValue, setDefaultValue] = useState("");

  useEffect(() => {
    getWords().then((words) => {
      setWords(words);
      setShowupWords(words);
      console.log(words);
    });
  }, []);

  const onChange = (event) => {
    let matchedWord = [];
    let inputText = event.target.value;

    for (let i = 0; i < Words.length; ++i) {
      if (Words[i].indexOf(inputText) >= 0) {
        matchedWord.push(Words[i]);
      }
    }
    if (matchedWord.length == 1) {
      inputText = matchedWord[0];
    }

    setShowupWords(matchedWord);
    setDefaultValue(inputText);
  };

  const handleClick = () => {
    setShowupWords(Words);
    setDefaultValue("");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <div class="relative">
          <input
            type="text"
            class="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
            placeholder="Search"
            onChange={onChange}
            value={defaultValue}
          />
          <svg
            class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M11.95 13.05a6 6 0 111.414-1.414l4.243 4.243-1.414 1.414-4.243-4.243zm-1.91 0a4 4 0 111.414-1.414l4.243 4.243-1.414 1.414-4.243-4.243zm-1.91 0a2 2 0 111.414-1.414l4.243 4.243-1.414 1.414-4.243-4.243z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <button
          onClick={handleClick}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline uppercase"
        >
          <svg
            class="inline-block h-4 w-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 3a7 7 0 00-7 7c0 3.87 3.144 7 7 7s7-3.13 7-7a7 7 0 00-7-7zm0 12a5 5 0 100-10 5 5 0 000 10zm-1-5a1 1 0 011-1h2a1 1 0 010 2h-2a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
          Clear
        </button>
      </div>
      <AutoCompleteItem words={showupWords} />
    </div>
  );
};

export default AutoComplete;
