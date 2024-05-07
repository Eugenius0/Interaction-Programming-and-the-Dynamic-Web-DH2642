import styles from './styles.module.css';

export function DetailsView(props) {
  const { dishData, guests, isDishInMenu } = props;

  const { containerDetailsView, dishImage, moreInformationLink, addToMenuButton} = styles;

  const calculatePriceForAllGuestsACB = (guests) => {
    // Calculate the price for all guests
    return (dishData.pricePerServing * guests).toFixed(2);
  };

  const handleAddToMenuClickACB = () => {
    // Fire custom event for adding dish to menu
    props.onAddToMenu();
    window.location.hash="#/search"
  };

  const handleBackToSearchClickACB = () => {
    window.location.hash="#/search"
  }

  return (
    
    <div className={containerDetailsView}>


      <img src={dishData.image} alt={dishData.title} className={dishImage} />
      <h2>{dishData.title}</h2>
      <p>Price per person: {dishData.pricePerServing}</p>
      <p>Total price for {guests} guests: {calculatePriceForAllGuestsACB(guests)}</p>
      <h3>Ingredients:</h3>
      <ul>
        {dishData.extendedIngredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name}: {ingredient.amount} {ingredient.unit} 
          </li>
        ))}
      </ul>
      <h3>Cooking Instructions:</h3>
      <p>{dishData.instructions}</p>
      <a className={moreInformationLink} href={dishData.sourceUrl}>
        More information
      </a>
      <button
        className={addToMenuButton}
        onClick={handleAddToMenuClickACB}
        disabled={isDishInMenu}
      >
        Add to Menu
      </button>
      <button  onClick ={handleBackToSearchClickACB}>Cancel</button>
    </div>
  );
}
