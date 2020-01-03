import * as React from "react";

import { IStoreProps } from "./types";

function createStore<S, A>(
  name: string,
  reducer: React.Reducer<S, A>
): [
  React.FunctionComponent<IStoreProps<S, A>>,
  () => S,
  () => React.Dispatch<A>
] {
  const StateContext = React.createContext<S | undefined>(undefined);
  const DispatchContext = React.createContext<React.Dispatch<A> | undefined>(
    undefined
  );
  StateContext.displayName = `${name}.StateContext`;
  DispatchContext.displayName = `${name}.DispatchContext`;

  const StoreProvider: React.FunctionComponent<IStoreProps<S, A>> = ({
    defaultState,
    onDispatch,
    children
  }) => {
    const [state, baseDispatch] = React.useReducer<React.Reducer<S, A>>(
      reducer,
      defaultState
    );

    const dispatch: React.Dispatch<A> = React.useCallback(
      (action: A) => {
        baseDispatch(action);
        if (onDispatch) {
          onDispatch(action);
        }
      },
      [onDispatch]
    );

    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  };

  const useStoreState = () => {
    const context = React.useContext(StateContext);
    if (!context) {
      throw new Error(
        `useStoreState must be used within ${StateContext.displayName}.Provider`
      );
    }

    return context;
  };

  const useStoreDispatch = () => {
    const context = React.useContext(DispatchContext);
    if (!context) {
      throw new Error(
        `useStoreDispatch must be used within ${DispatchContext.displayName}.Provider`
      );
    }

    return context;
  };

  return [StoreProvider, useStoreState, useStoreDispatch];
}

export { createStore };
