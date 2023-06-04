import { createContext, useReducer } from "react";
import { authReducer } from "../redux/reducers/authReducer";
// import { tourReducer,INITIAL_STATE_TOUR } from "../redux/reducers/tourReducer";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer);
  // const [tourState, tourDispatch] = useReducer(tourReducer, INITIAL_STATE_TOUR);

  return (
    <AppContext.Provider
      value={[
        {
          state: {
            ...authState,
          
          },
        },
        {
          dispatch: {
            authDispatch,
          },
        },
      ]}
    >
      {children}
    </AppContext.Provider>
  );
};
