import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import testReducer from "../reducer/reducer";

const configStore = () => {
  const store = createStore(
    combineReducers({
      test: testReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
};

export default configStore;
