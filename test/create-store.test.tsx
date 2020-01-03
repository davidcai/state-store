import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { IStoreProps } from "../src/types";
import { createStore } from "../src/create-store";

interface IStoreState {
  count: number;
}

type Action = {
  type: "INCREMENT";
};

const reducer = (state: IStoreState, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    default:
      throw new Error("Unsupported action");
  }
};

const defaultState = { count: 0 };

describe(".createStore()", () => {
  let AppStore: React.FunctionComponent<IStoreProps<IStoreState, Action>>;
  let useAppState: () => IStoreState;
  let useAppDispatch: () => React.Dispatch<Action>;
  let ChildComponent: React.FunctionComponent<{}>;

  beforeEach(() => {
    [AppStore, useAppState, useAppDispatch] = createStore<IStoreState, Action>(
      "MyAppStore",
      reducer,
      defaultState
    );

    ChildComponent = () => {
      const { count } = useAppState();
      const dispatch = useAppDispatch();

      const handleClick = React.useCallback(() => {
        dispatch({ type: "INCREMENT" });
      }, [dispatch]);

      return (
        <button type="button" onClick={handleClick} data-testid="button">
          {count}
        </button>
      );
    };
  });

  it("should provide store state and dispatch", () => {
    const { getByTestId } = render(
      <AppStore>
        <ChildComponent />
      </AppStore>
    );
    const button = getByTestId("button");

    expect(button).toHaveTextContent("0");
    fireEvent.click(button);
    expect(button).toHaveTextContent("1");
  });

  it("should notify dispatched actions", () => {
    const spyDispatch = jest.fn();
    const { getByTestId } = render(
      <AppStore onDispatch={spyDispatch}>
        <ChildComponent />
      </AppStore>
    );

    fireEvent.click(getByTestId("button"));

    expect(spyDispatch).toBeCalledTimes(1);
    expect(spyDispatch).toBeCalledWith(
      expect.objectContaining({
        type: "INCREMENT"
      })
    );
  });
});
