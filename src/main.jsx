import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import GlobalStyles from "./styles/GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { persitor, store } from "./redux/store.js";
// import { Toaster } from "sonner";
import { theme } from "./styles/ThemeStyles.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <PersistGate persistor={persitor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate> 
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
