import {combineReducers} from "redux"
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loginReducer} from "./reducers/Auth";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["loginReducer"]
}
const rootReducer = combineReducers({loginReducer,
    //  signupReducer
    })

export default persistReducer(persistConfig, rootReducer)