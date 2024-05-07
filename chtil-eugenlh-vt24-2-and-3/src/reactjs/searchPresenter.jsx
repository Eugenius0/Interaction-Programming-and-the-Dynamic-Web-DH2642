import { SearchFormView } from '../views/searchFormView.jsx';
import {SearchResultsView} from '../views/searchResultsView';
import { observer } from 'mobx-react-lite';


const Search = observer(
    function Search(props) {
        const {model} = props

        function changeTextACB(text){
            model.setSearchQuery(text)
        }

        function changeTypeACB(type){
            model.setSearchType(type)
        }

        function searchACB(){
            model.doSearch(model.searchParams)
        }

        function conditionalSearchRenderACB(promiseState){
            if(!promiseState.promise){
                return <div>No data</div>
            }
            if (promiseState.promise){
                if(!promiseState.data && !promiseState.error){
                    return <img src={"https://brfenergi.se/iprog/loading.gif"}></img>
                }
    
                if (promiseState.error){
                    return String(promiseState.error)
                }
            }

        }

        function chooseDishACB(dish){
            model.setCurrentDishId(dish.id)
        }
        console.log(String(model.searchResultsPromiseState))
        return (
            //rendering Search Form
            <div>
            <SearchFormView
            dishTypeOptions = {["starter", "main course", "dessert"]}
            text = {model.searchParams.query}
            onTextChange = {changeTextACB}
            type = {model.searchParams.type}
            onTypeChange = {changeTypeACB}
            onCustomEvt = {searchACB}
            />
            {
                //conditional render Search Results
                conditionalSearchRenderACB(model.searchResultsPromiseState) || 
                <SearchResultsView searchResults = {model.searchResultsPromiseState.data} 
                    onDishClick ={chooseDishACB}
                />
            }
            </div>
          )

    }
)


export {Search}
