import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GraphQLClientProvider, requestConfigLoader } from "@capactio/react-components";
import "antd/dist/antd.css";

// set credentials for GQL client
requestConfigLoader.save({
  endpoint: process.env.REACT_APP_CAPACT_GATEWAY_ENDPOINT,
  username: process.env.REACT_APP_CAPACT_GATEWAY_USERNAME,
  password: process.env.REACT_APP_CAPACT_GATEWAY_PASSWORD,
})

ReactDOM.render(
  <React.StrictMode>
    {/* provide GQL client */}
    <GraphQLClientProvider>
      <App />
    </GraphQLClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
