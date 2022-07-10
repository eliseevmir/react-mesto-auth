import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error ("Root element with id #root not found");
}
const root = ReactDOM.createRoot(rootElement)
root.render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>

);

reportWebVitals();
