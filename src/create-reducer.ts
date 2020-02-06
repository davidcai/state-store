function createReducer<S, A extends { type: string }>(
  reducerMap: {
    [K in A["type"]]: (state: S, action: Extract<A, { type: K }>) => void | S;
  }
) {
  return (state: S, action: Extract<A, { type: string }>) => {
    const fn = reducerMap[action.type as keyof typeof reducerMap];
    if (!fn) {
      throw new Error(`Unsupported action: ${action.type}`);
    }

    const newState = fn(state, action);

    return typeof newState === "undefined" ? state : newState;
  };
}

export { createReducer };
