import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/lib/persistStore";
// import rpm from "redux-promise-middleware";
import rootReducer from "./Root";
import ReduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// development mode
let enhancers = composeEnhancers(applyMiddleware(ReduxThunk));

if (process.env.NODE_ENV !== "development") {
  enhancers = applyMiddleware(ReduxThunk);
}
const store = createStore(rootReducer, enhancers);

const persistor = persistStore(store);

const storeWithPersistor = { store, persistor };

export default storeWithPersistor;
