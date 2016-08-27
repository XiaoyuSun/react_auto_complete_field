import AutoCompleteItem from './auto_complete_item';
import React, {Component, PropTypes} from 'react';
import Words from '../data/words';

class AutoComplete extends Component {
  constructor() {
    super();
    this.state = {
      showUpWords: Words,
      defaultValue: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(event) {
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
    this.setState({
      showUpWords: matchedWord,
      defaultValue: inputText
    });
  }

  handleClick() {
    this.setState({
      showUpWords: Words,
      defaultValue: ''
    });
  }

  render() {
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
}

export default AutoComplete;
