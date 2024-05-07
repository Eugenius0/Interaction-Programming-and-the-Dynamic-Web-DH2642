/* 
   The Model keeps the state of the application (Application State). 
   It is an abstract object, i.e. it knows nothing about graphics and interaction.
*/
import {searchDishes, getDishDetails} from './dishSource';
import {resolvePromise} from './resolvePromise';

const model = {  
    numberOfGuests: 2,
    dishes: [],
    currentDishId: null,  // null means "intentionally empty"
    searchParams: {},
    searchResultsPromiseState: {},

    setCurrentDishId(dishId){    
        if (dishId && this.currentDishId != dishId){
            this.currentDishId = dishId
            resolvePromise(getDishDetails(dishId))
        }
    },
    
    setNumberOfGuests(number){
        if(Number.isInteger(number) && number > 0) {
            this.numberOfGuests = number
        } else {
            throw new Error('number of guests not a positive integer')
        }
    },
    
    addToMenu(dishToAdd){
        // array spread syntax example. Make sure you understand the code below.
        // It sets this.dishes to a new array [   ] where we spread (...) the elements of the existing this.dishes
        // creates a new array with all the existing dishes and the new dish.
        this.dishes= [...this.dishes, dishToAdd];
    },

    // filter callback exercise
    removeFromMenu(dishToRemove){
        function shouldWeKeepDishCB(dish){
            return dish.id !== dishToRemove.id
        }
        this.dishes = this.dishes.filter(shouldWeKeepDishCB);
    },
    
    setSearchQuery(query){
        this.searchParams.query = query
    },

    setSearchType(type){
        this.searchParams.type = type
    },

    doSearch(params){
        resolvePromise(searchDishes(params), this.searchResultsPromiseState)
    },
    // more methods will be added here, don't forget to separate them with comma!
};

export {model};
