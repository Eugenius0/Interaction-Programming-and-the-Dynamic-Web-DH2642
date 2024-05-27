import { GameState } from "../types/gameStateTypes";

export type PromiseState<T> = {
  promise: Promise<T> | null;
  data: T | null;
  error: Error | null;
};

export function resolvePromise(
  prms: Promise<GameState>,
  promiseState: PromiseState<GameState>
) {
  if (prms != null) {
    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;

    function saveACB(data: GameState) {
      if (promiseState.promise === prms) {
        promiseState.data = data;
      }
    }

    function errorACB(error: Error) {
      if (promiseState.promise === prms) {
        promiseState.error = error;
      }
    }

    prms.then(saveACB).catch(errorACB);
  }
}
