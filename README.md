# state-store

An utility to create state store for React.

```jsx
import { createStore } from "state-store";
import { reducer } from "./reducer";

const [AppStore, useAppState, useAppDispatch] = createStore(
  "MyAppStore",
  reducer
);

const defaultState = { name: "David" };

function App() {
  return <AppStore defaultState={defaultState}>...</AppStore>;
}
```
