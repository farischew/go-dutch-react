import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ReceiptContextProvider } from "./context/receipt-context";
import "./styles/app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReceiptContextProvider>
    <App />
  </ReceiptContextProvider>
);
