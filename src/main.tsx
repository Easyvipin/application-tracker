import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Applications from "./containers/Applications/index.tsx";
import About from "./containers/About/index.tsx";
import ApplicationLayout from "./components/ApplicartionLayout/index.tsx";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route element={<ApplicationLayout />}>
              <Route path="applications" element={<Applications />} />
            </Route>
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
