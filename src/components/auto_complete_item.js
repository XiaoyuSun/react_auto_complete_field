import React, {Component, PropTypes} from 'react';

const AutoCompleteItem = ({ words }) => {
  const showItems = words.map(word => <li key={word}>{word}</li>);
  return (
    <div>
      {showItems}
    </div>
  )
}

export default AutoCompleteItem;
