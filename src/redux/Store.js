import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/lib/persistStore";
import rpm from "redux-promise-middleware";
import rootReducer from "./Root";

const devtools = composeWithDevTools(applyMiddleware(rpm));

const store = createStore(rootReducer, devtools);

const persistor = persistStore(store);

const storeWithPersistor = { store, persistor };

export default storeWithPersistor;
