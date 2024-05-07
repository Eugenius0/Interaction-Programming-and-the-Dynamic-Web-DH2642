import { SummaryView } from "../views/summaryView.jsx";
import { shoppingList } from "/src/utilities.js";

function Summary(props){
    const { model } = props

    const ingredients = shoppingList(model.dishes || [])

    return <SummaryView people={model.numberOfGuests} ingredients={ingredients}/>;
}

export { Summary }