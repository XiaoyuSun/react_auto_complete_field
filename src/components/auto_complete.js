import AutoCompleteItem from './auto_complete_item';
import { useState } from 'react';
import Words from '../data/words';

const AutoComplete = () => {
  const {showupWords, setShowupWords} = useState(Words);
  const {defaultValue, setDefaultValue} = useState('');
  

  onChange = (event) => {
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

  handleClick = () => {
    setShowupWords(Words);
    setDefaultValue('');
  }

  return (
    <div>
      <input
        onChange={this.onChange}
        value={this.state.defaultValue}
      />
      <button onClick={this.handleClick}>clear</button>
      <AutoCompleteItem words={this.state.showUpWords} />
    </div>
  );
}

export default AutoComplete;