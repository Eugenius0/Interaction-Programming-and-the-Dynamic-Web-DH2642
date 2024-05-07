import { SidebarView } from '../views/sidebarView.jsx';
import { observer } from 'mobx-react-lite';

const Sidebar = observer(
  function Sidebar(props) {
    const { model } = props

  const handleNumberChangeACB = (newNumber) => {
    model.setNumberOfGuests(newNumber)
  }

  // function handleNumberChangeACB(newNumber){
  //   return model.setNumberOfGuests(newNumber)
  // } This would be without arrow but I hope thick arrow functions that are named are accepted :)

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
    <SidebarView
      number={model.numberOfGuests}
      dishes={model.dishes}
      onNumberChange={handleNumberChangeACB}
      onDishSelection={handleDishSelectionACB}
      onRemoveDish={handleRemoveDishACB}
      onDishInterest={handleDishInterestACB}
    />
  )
})

export { Sidebar };