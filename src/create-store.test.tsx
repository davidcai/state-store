import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { IStoreProps } from "./types";
import { createStore } from "./create-store";

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

describe("create-store", () => {
  let AppStore: React.FunctionComponent<IStoreProps<IStoreState, Action>>;
  let useAppState: () => IStoreState;
  let useAppDispatch: () => React.Dispatch<Action>;
  let ChildComponent: React.FunctionComponent<{}>;

  beforeEach(() => {
    [AppStore, useAppState, useAppDispatch] = createStore<IStoreState, Action>(
      "MyAppStore",
      reducer
    );

    ChildComponent = () => {
      const { count } = useAppState();
      const dispatch = useAppDispatch();

      const handleClick = React.useCallback(() => {
        dispatch({ type: "INCREMENT" });
      }, [dispatch]);

      return (
        <button type="button" onClick={handleClick}>
          {count}
        </button>
      );
    };
  });

  describe(".createStore()", () => {
    it("should do stuff", () => {
      const { getByText } = render(
        <AppStore defaultState={defaultState}>
          <ChildComponent />
        </AppStore>
      );

      expect(getByText("0")).toBeInTheDocument();

      fireEvent.click(getByText("0"));

      expect(getByText("1")).toBeInTheDocument();
    });
  });
});
