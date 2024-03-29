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
    <div>
      <input onChange={onChange} value={defaultValue} />
      <button onClick={handleClick}>clear</button>
      <AutoCompleteItem words={showupWords} />
    </div>
  );
};

export default AutoComplete;
