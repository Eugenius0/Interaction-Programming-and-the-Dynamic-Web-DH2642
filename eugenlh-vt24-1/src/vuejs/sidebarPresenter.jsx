import { SidebarView } from '../views/sidebarView.jsx';


function Sidebar(props) {
    const { model } = props

    const handleNumberChangeACB = (newNumber) => {
      model.setNumberOfGuests(newNumber)
    }

    const handleDishSelectionACB = (selectedDish) => {
      model.setCurrentDishId(selectedDish.id)
    }

    const handleRemoveDishACB = (dishToRemove) => {
      model.removeFromMenu(dishToRemove)
    }

    const handleDishInterestACB = (dish) => {
      model.setCurrentDishId(dish.id)
    }


    return (
      <div>
        <SidebarView
          number={model.numberOfGuests}
          dishes={model.dishes}
          onNumberChange={handleNumberChangeACB}
          onDishSelection={handleDishSelectionACB}
          onRemoveDish={handleRemoveDishACB}
          onDishInterest={handleDishInterestACB}
        />
      </div>
    )
}

export { Sidebar }
