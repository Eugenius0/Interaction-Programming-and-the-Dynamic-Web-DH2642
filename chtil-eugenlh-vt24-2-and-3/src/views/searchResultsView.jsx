import styles from './styles.module.css'

export function SearchResultsView(props) {
    const { searchResults } = props;

    const {containerResultsView} = styles
  
    // Event handler for dish click
    const handleDishClickACB = (dish) => {
      // Fire custom event for dish click
      props.onDishClick(dish)
      window.location.hash="#/details"
    }
  
    return (
      <div>
        {searchResults.map((dish) => (
          <span key={dish.id} className={containerResultsView} onClick={() => handleDishClickACB(dish)}>
            <img src={dish.image} height='100' alt={dish.title} />
            <div>{dish.title}</div>
          </span>
        ))}
      </div>
    );
  }