import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { tourReducer } from "./tourReducer";
import { authReducer } from "./authReducer";
import { countryReducer } from "./countryReducer";
import { transReducer } from "./transReducer";

const persistConfig = {
    key:"root",
    storage,
    whitelist:["tours","auth","country","transaction"]
}
const reducers = combineReducers({
    tours : tourReducer,
    auth: authReducer,
    country: countryReducer,
    transaction: transReducer,
})

export default persistReducer(persistConfig,reducers)