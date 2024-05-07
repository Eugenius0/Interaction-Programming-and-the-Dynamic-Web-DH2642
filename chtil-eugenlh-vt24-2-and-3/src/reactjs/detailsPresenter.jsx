import { useState, useEffect } from 'react';
import { DetailsView } from '../views/detailsView.jsx';
import { observer } from 'mobx-react-lite';
import { getDishDetails } from '../dishSource.js';

const Details = observer( 
    function Details(props) {
        const { model } = props;

        // Define Component State
        const [currentDishPromiseState, setCurrentDishPromiseState] = useState({
            promise: null,
            data: null,
            error: null
        });

        // Function to initiate a new promise
        const initiateNewPromise = (dishId) => {
            console.log('Initiating promise for dish ID:', dishId);
            const promise = getDishDetails(dishId)
            setCurrentDishPromiseState({ promise: promise, data: null, error: null });
                promise.then((promiseResult) => {
                    console.log('Promise resolved with data:', promiseResult);
                    setCurrentDishPromiseState({
                        promise: promise,
                        data: promiseResult,
                        error: null
                    });
                })
                .catch((error) => {
                    console.error('Error fetching dish details:', error);
                    setCurrentDishPromiseState({
                        promise: null,
                        data: null,
                        error: error.message
                    });
                });
        };

        // Implement Side Effect
        useEffect(() => {
            if (model.currentDishId) {
                console.log('Current dish ID:', model.currentDishId);
                // Trigger promise whenever currentDishId changes
                initiateNewPromise(model.currentDishId);
            }
        }, [model.currentDishId]); // Depend on model.currentDishId changes

        function findDishACB(dish) {
            return currentDishPromiseState.data.id === dish.id;
        }

        function addDishToMenuACB() {
            if (currentDishPromiseState.data) {
                model.addToMenu(currentDishPromiseState.data);
            }
        }

        // Conditional rendering based on the Promise State of the current dish (suspense)
        if (!currentDishPromiseState.promise) {
            return <div>No data</div>;
        }

        if (!currentDishPromiseState.data && !currentDishPromiseState.error) {
            return <img src={"https://brfenergi.se/iprog/loading.gif"} alt="Loading" />;
        }

        if (currentDishPromiseState.promise) {
            if (currentDishPromiseState.data) {
                return (
                    <DetailsView
                        dishData={currentDishPromiseState.data}
                        guests={model.numberOfGuests}
                        isDishInMenu={model.dishes.find(findDishACB)}
                        onAddToMenu={addDishToMenuACB}
                    />
                );
            }

            if (currentDishPromiseState.error) {
                return String(currentDishPromiseState.error);
            }
        }
    }
);

export { Details };

