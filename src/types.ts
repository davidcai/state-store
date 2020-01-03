export interface IStoreProps<S, A> {
  defaultState?: S;
  onDispatch?: (action: A) => void;
}
