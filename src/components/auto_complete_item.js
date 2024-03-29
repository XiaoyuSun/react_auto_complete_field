import React from 'react';

const AutoCompleteItem = ({ words = [] }) => {
  return (
    <div>
      {words.map((word, index) => <li key={`${word}-${index}`}>{word}</li>)}
    </div>
  )
}

export default AutoCompleteItem;
