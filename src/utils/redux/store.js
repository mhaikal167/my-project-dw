import { createStore ,applyMiddleware,compose} from "redux";
import logger from "redux-logger"
import { persistStore } from "redux-persist";
import reducers from "./reducers";
import thunk from "redux-thunk";

const middleware = [thunk]

if(process.env.NODE_ENV === "development"){
    middleware.push(logger)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

export const persistor = persistStore(store)
