export function resolvePromise(prms, promiseState){
    if(prms != null && promiseState){
        promiseState.promise= prms;
        promiseState.data= null;
        promiseState.error= null;

        function saveACB(data){
            if (promiseState.promise === prms){
                promiseState.data = data
            }
            
        }

        function errorACB(error){
            if (promiseState.promise === prms){
                promiseState.error = error
            }
        }

        prms.then(saveACB).catch(errorACB)
    }
}