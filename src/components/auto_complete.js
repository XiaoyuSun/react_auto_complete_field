import AutoCompleteItem from './auto_complete_item';
import React, { useState } from 'react';
import Words from '../data/words';

const AutoComplete = () => {
  const [showupWords, setShowupWords] = useState(Words);
  const [defaultValue, setDefaultValue] = useState('');
  

  const onChange = (event) => {
    let matchedWord = [];
    let inputText = event.target.value;

    for (let i = 0; i < Words.length; ++i) {
      if (Words[i].indexOf(inputText) >= 0) {
        matchedWord.push(Words[i]);
      }
    };
    if (matchedWord.length == 1) {
      inputText = matchedWord[0];
    };
    
    setShowupWords(matchedWord);
    setDefaultValue(inputText);
  }

  const handleClick = () => {
    setShowupWords(Words);
    setDefaultValue('');
  }

  return (
    <div>
      <input
        onChange={onChange}
        value={defaultValue}
      />
      <button onClick={handleClick}>clear</button>
      <AutoCompleteItem words={showupWords} />
    </div>
  );
}

export default AutoComplete;