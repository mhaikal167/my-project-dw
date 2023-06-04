import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "flowbite/dist/flowbite.css";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppProvider } from "@Utils/context/AppContext";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store ,persistor} from "./utils/redux/store";
import App from "./App";

const client = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <QueryClientProvider client={client}>
        <ThemeProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
            <App />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </QueryClientProvider>
    </AppProvider>
  </React.StrictMode>
);
