import {dishType, menuPrice, sortDishes} from "/src/utilities.js";
import styles from './styles.module.css'

export function SidebarView(props) {
    const {containerSidebarView, tableContainerSidebarView, button, rightAlign, dishTypesSidebarView, totalSidebarView} = styles

    const sortedDishes = sortDishes([...props.dishes])
    const totalPrice = menuPrice(sortedDishes.map(dish => ({ ...dish, pricePerServing: dish.pricePerServing * props.number }))).toFixed(2);

    const handleDecreaseACB = () => {
        props.onNumberChange(props.number - 1)
    }

    const handleIncreaseACB = () => {
        props.onNumberChange(props.number + 1)
    }

    const handleDishInterestACB = (dish) => {
        console.log('User is interested in the dish:', dish)
        props.onDishInterest(dish);
    }

    const handleRemoveDishACB = (dish) => {
        console.log('User wants to remove the dish:', dish)
        props.onRemoveDish(dish);
    }

  return (
    <div>
    <div className={containerSidebarView}>
        <button className={button} disabled = {props.number == 1} onClick={handleDecreaseACB}>-</button>
        <div>{props.number}</div>
        <button className={button} onClick={handleIncreaseACB}>+</button>
    </div>
    <br />
    <div className={tableContainerSidebarView}>
        <table>
            <tbody>
                {
                sortedDishes.map(dishesTableRowCB)
                }
        <tr>
        <td></td>
            <td className={totalSidebarView}>Total: </td>
            <td></td>
            <td className={rightAlign}>{totalPrice}</td>
        </tr>
         </tbody>
        </table>
    </div>
    </div>
  )

  function dishesTableRowCB(dish){
    const pricePerDish = (dish.pricePerServing * props.number).toFixed(2)
    return <div><tr key={dish.id}>
        <td>
            <button className={button} onClick={() => handleRemoveDishACB(dish)}>x</button>
        </td>
        <td>
            <a href="#" onClick={() => handleDishInterestACB(dish)}>{dish.title}</a>
        </td>
        <td className={dishTypesSidebarView}>{dishType(dish)}</td>
        <td className={rightAlign}>{pricePerDish}</td>
        </tr>
        </div>
  }
}