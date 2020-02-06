function createReducer<S, A extends { type: string }>(
  reducerMap: {
    [K in A["type"]]: (state: S, action: Extract<A, { type: K }>) => S;
  }
) {
  return (state: S, action: Extract<A, { type: string }>) => {
    const fn = reducerMap[action.type as keyof typeof reducerMap];
    if (typeof fn === "function") {
      return fn(state, action);
    }

    throw new Error(`Unsupported action: ${action.type}`);
  };
}

export { createReducer };
