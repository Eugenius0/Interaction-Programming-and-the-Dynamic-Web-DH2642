import { DetailsView } from '../views/detailsView.jsx';



    function Details(props){
        const {model} = props

        function findDishACB(dish){
            return model.currentDishPromiseState.data.id === dish.id
        }

        function addDishToMenuACB() {
           model.addToMenu(model.currentDishPromiseState.data)
        }

        //conditional rendering based on the Promise State of the current dish (suspense)
        if(!model.currentDishPromiseState.promise){
            return <div>No data</div>
        }
        if (model.currentDishPromiseState.promise){
            if (model.currentDishPromiseState.data){
                return (
                    <DetailsView
                    dishData = {model.currentDishPromiseState.data}
                    guests = {model.numberOfGuests}
                    isDishInMenu = {model.dishes.find(findDishACB)}
                    onAddToMenu = {addDishToMenuACB}
                    />
                    
                ) }

            if(!model.currentDishPromiseState.data && !model.currentDishPromiseState.error){
                return <img src={"https://brfenergi.se/iprog/loading.gif"}></img>
            }

            if (model.currentDishPromiseState.error){
                return String(model.currentDishPromiseState.error)
            }
        }
    }

export {Details}