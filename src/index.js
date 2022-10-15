import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import state from "./data/state";
import "./css/index.css";
import App from "./components/App/App.jsx";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    bkTransparent: "rgba(255, 255, 255, 0.7)",
    white: "#fff",
    main: "#1976d2",
    textColor: "#000",
    bkCleaning: "linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(0, 255, 140, 1) 100%)",
    bkCooker: "linear-gradient(0deg, rgba(25, 118, 210, 1) 25%, rgba(45, 253, 159, 1) 74%)",
    bkDelivery: "linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(255, 255, 255, 1) 100%)",
    bkDriver: "linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(255, 255, 255, 1) 100%)",
    bkEyebrows: "linear-gradient(0deg, rgba(25, 118, 210, 1) 25%, rgba(168, 253, 45, 1) 74%)",
    bkHair: "linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(255, 175, 175, 1) 100%)",
    bkManicur: "linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(255, 233, 175, 1) 100%)",
    bkMasseur: "linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(247, 0, 255, 1) 100%)",
    bkNanny: "linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(255, 133, 191, 1) 100%)",
    bkSport: " linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(190, 255, 151, 1) 100%)",
    bkPhsych: "linear-gradient(0deg, rgba(25, 118, 210, 1) 32%, rgba(255, 255, 255, 1) 100%)",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App state={state} />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
