import produce from "immer";

function createReducer<S, A extends { type: string }>(
  reducerMap: {
    [K in A["type"]]: (draft: S, action: Extract<A, { type: K }>) => void | S;
  }
) {
  return produce((draft: S, action: Extract<A, { type: string }>) => {
    const fn = reducerMap[action.type as keyof typeof reducerMap];
    if (typeof fn === "function") {
      return fn(draft, action);
    }

    throw new Error(`Unsupported action: ${action.type}`);
  });
}

export { createReducer };
