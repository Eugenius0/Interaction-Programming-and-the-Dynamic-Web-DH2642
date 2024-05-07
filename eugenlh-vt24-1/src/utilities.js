/* uncomment the export below to enable the 1.1.2 test suite! */
export function compareIngredientsCB(ingredientA, ingredientB){
    if (ingredientA.aisle < ingredientB.aisle ) {
        return -1
    } else if (ingredientA.aisle > ingredientB.aisle) {
        return 1
    } else {
        if (ingredientA.name < ingredientB.name) {
            return -1
        } else if (ingredientA.name > ingredientB.name) {
            return 1
        } else {
            return 0
        }
    }
}


export function sortIngredients(ingredients){
    return [...ingredients].sort(compareIngredientsCB)
}

// helper object for isKnownType and dish sorting
const dishTypeRanking={
    starter:1,
    "main course":2,  // quotes are needed due to the space in the property name
    dessert:3,
    "":0              // property name is the empty string
};

export function isKnownTypeCB(type){
    return dishTypeRanking[type] !== undefined
}

export function dishType(dish){
    const dishTypes = dish.dishTypes || []
    const recognizedTypes = dishTypes.filter(isKnownTypeCB)
    const firstRecognizedType = recognizedTypes.find(Boolean)
    return firstRecognizedType || ""
}

export function compareDishesCB(dishA, dishB){
    const dishTypeA = dishType(dishA)
    const dishTypeB = dishType(dishB)
    return dishTypeRanking[dishTypeA] - dishTypeRanking[dishTypeB]
}


export function sortDishes(dishes){
    return [...dishes].sort(compareDishesCB)
}

export function menuPrice(dishesArray){
    const calculateTotalPrice = (accumulator, dish) => {
        return accumulator + dish.pricePerServing
    }
    const totalPrice = dishesArray.reduce(calculateTotalPrice, 0)
    return totalPrice
}

/* 
  This function is already implemented as it is more JavaScript + algorithms than interaction programming

   Given a menu of dishes, generate a list of ingredients. 
   If an ingredient repeats in several dishes, it will be returned only once, with the amount added up 
   
   As this is not an algorithm course, the function is mostly written but you have 2 callback passing TODOs.
*/
export function shoppingList(dishes){
    const result={}; // object used as mapping between ingredient ID and ingredient object

    // we define the callback inside the function, though this is not strictly needed in this case. But see below.
    function keepJustIngredientsCB(dish){
        return dish.extendedIngredients;
    }
    
    // ingredientCB must be defined inside shopingList() because it needs access to `result`
    // you will often need to define a callback inside the function where it is used, so it has access to arguments and other variables
    function ingredientCB(ingredient){
        if(result[ingredient.id] === undefined){  // more general: !result[ingredient.id]
            // since result[ingredient.id] is not defined, it means that the ingredient is not taken into account yet
            // so we associate the ingredient with the ID
            result[ingredient.id]={...ingredient};
            
            // JS Notes about the line above:
            // 1)    result[ingredient.id] 
            // In JS object.property is the same as object["property"] but the second notation is more powerful because you can write
            // object[x]  where x=="property"
            
            // 2)    {...ingredient } creates a *copy* of the ingredient (object spread syntax)
            // we duplicate it because we will change the object below
        } else {
            // since result[ingredient.id] is not defined, it means that the ingredient has been encountered before.
            // so we add up the amount:
            result[ingredient.id].amount +=  ingredient.amount;
        }
    }

    const arrayOfIngredientArrays= dishes.map(keepJustIngredientsCB);
    const allIngredients= arrayOfIngredientArrays.flat();    
    allIngredients.forEach(ingredientCB);

    // Note: the 3 lines above can be written as a function chain:
    // dishes.map(callback1).flat().forEach(callback2);

    // now we transform the result object into an array: we drop the keys and only keep the values
    return Object.values(result);
}

