import styles from './styles.module.css'

export function SearchFormView(props){
    const { dishTypeOptions, text, type } = props
    const {searchFormViewContainer, inputField, selectSearchFormView, buttonSearchFormView} = styles
  
    // Event handler for text input change
    const handleTextChangeACB = (e) => {
      // Fire custom event with the search text
      props.onTextChange(e.target.value)
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Trigger search if Enter key is pressed
            handleSearchClickACB()
        }
    };
  
    // Event handler for select change
    const handleTypeChangeACB = (e) => {
      // Fire custom event with the selected type
      props.onTypeChange(e.target.value)
    };
  
    // Event handler for button click
    const handleSearchClickACB = () => {
      // Fire custom event for search button click
      props.onCustomEvt('searchButtonClicked')
    };

    const handleSummaryClickACB = () => {
      window.location.hash="#/summary"
    }
  
    return (
      <div className={searchFormViewContainer}>
        <input
          className={inputField}
          type="text"
          value={text || ''}
          onChange={handleTextChangeACB}
          onKeyDown={handleKeyDown}
          placeholder="Enter search text"
        />
        <select className={selectSearchFormView} value={type || ''} onChange={handleTypeChangeACB}>
          <option value="">Choose:</option>
          {dishTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className={buttonSearchFormView} onClick={handleSearchClickACB}>Search!</button>
        <button onClick ={handleSummaryClickACB}>Summary</button>
      </div>
    );
}
