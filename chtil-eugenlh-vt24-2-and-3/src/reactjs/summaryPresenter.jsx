import { SummaryView } from "../views/summaryView.jsx";
import { observer } from "mobx-react-lite";
import { shoppingList } from "/src/utilities.js";

const Summary = observer(             // needed for the presenter to update (its view) when relevant parts of the model change
    function SummaryRender(props){
        const { model } = props

        const ingredients = shoppingList(model.dishes || [])

        return <SummaryView people={model.numberOfGuests} ingredients={ingredients}/>
    }
);

export { Summary };