import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue} from "/src/teacherFirebase.js";
import { getMenuDetails } from "/src/dishSource.js";

// Add relevant imports here 
import { firebaseConfig } from "/src/firebaseConfig.js";

// Initialise firebase app, database, ref
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

const PATH = "dinnerModel14";
const rf=ref(db, PATH)
// set(ref(db, PATH + "/test"), "dummy");
// set(someRef, modelToPersistence({
//     numberOfGuests:5, 
//     currentDishId:13, 
//     dishes:[{id:13, title:"dummy1"}, 
//             {id:42, title:"dummy2"}]
//    }))

function modelToPersistence(model){
    const { numberOfGuests, dishes, currentDishId } = model

    function transformerCB(dish) {
        return dish.id
    }
    
    const dishIds = dishes.map(transformerCB).sort()

    const dataToPersist = {
        numberOfGuests: numberOfGuests,
        dishIds: dishIds,
        currentDishId: currentDishId
    };

    return dataToPersist;
}

function persistenceToModel(data_from_firebase, model){
    model.setNumberOfGuests(data_from_firebase?.numberOfGuests || 2)
    model.setCurrentDishId(data_from_firebase?.currentDishId || null)
    
    return getMenuDetails(data_from_firebase?.dishIds || []).then(function saveToModelACB(dishes){ 
        model.dishes = dishes
})
}

function saveToFirebase(model){
    if(model.ready) {
        const dataToPersist = modelToPersistence(model)
        set(rf, dataToPersist)
    }
}

function readFromFirebase(model){
    model.ready = false
    onValue(rf, data_from_firebase => {
        if(model.ready) {
            persistenceToModel(data_from_firebase.val(), model)
        }
    })
    return get(rf)
            .then(function convertACB(snapshot){
                   // return promise
                   return persistenceToModel(snapshot.val(), model)
             })
            .then(function setModelReadyACB(){
                        model.ready = true
            })  
}

function connectToFirebase(model, watchFunction){
    readFromFirebase(model)
    function checkACB(){
        return [model.numberOfGuests, model.currentDishId, model.dishes]
    }
    function effectACB(){
        saveToFirebase(model)
    }
    watchFunction(checkACB, effectACB)
}

// Remember to uncomment the following line:
export { connectToFirebase, modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase }