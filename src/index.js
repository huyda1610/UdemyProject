import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Suspense } from "react";
import LoadingIcons from 'react-loading-icons'

// Component Provider dùng để kết nối redux store với react component
import { Provider } from "react-redux";
import store from "./configStore";
import "./Styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Suspense fallback={
  <div className="d-flex justify-content-center align-items-center">
    <LoadingIcons.Circles stroke="#8B0000"/>
  </div>
  }>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>

  // </React.StrictMode>
);
