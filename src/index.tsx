import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";

require("dotenv").config();

const GlobalStyles = createGlobalStyle`
body {
  margin : 0;
}
`;
const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);
