
const AutoCompleteItem = ({ words }) => {
  return (
    <div>
      {words.map(word => <li key={word}>{word}</li>)}
    </div>
  )
}

export default AutoCompleteItem;
