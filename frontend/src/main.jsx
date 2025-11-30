import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./index.css"; // Make sure this is imported to load Tailwind

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* CssBaseline is removed because Tailwind handles normalization now */}
      <App />
    </Provider>
  </React.StrictMode>
);
