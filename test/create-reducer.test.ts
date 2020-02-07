import "@testing-library/jest-dom/extend-expect";

import { createReducer } from "../src/create-reducer";

interface IStoreState {
  count: number;
}

type Action = { type: "INCREMENT"; by: number } | { type: "ADD"; by: number };

const defaultState: IStoreState = {
  count: 0
};

/* eslint-disable no-param-reassign,@typescript-eslint/ban-ts-ignore */
describe(".createReducer()", () => {
  const reducer = createReducer<IStoreState, Action>({
    INCREMENT: (state, action) => ({
      count: state.count + action.by
    }),
    ADD: (state, action) => {
      state.count += action.by;
    }
  });

  it("should produce reducer function", () => {
    expect(typeof reducer).toEqual("function");
    expect(reducer(defaultState, { type: "INCREMENT", by: 2 }).count).toBe(2);
    expect(reducer(defaultState, { type: "ADD", by: 3 }).count).toBe(3);
  });

  it("should throw error for unsupported actions", () => {
    // @ts-ignore
    expect(() => reducer(defaultState, { type: "DECREMENT" })).toThrow(
      "Unsupported action: DECREMENT"
    );
  });
});
