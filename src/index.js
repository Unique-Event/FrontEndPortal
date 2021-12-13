import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { CssBaseline } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider } from 'easy-peasy';
import { store } from './Store/StoreConfig';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*60*1000,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    {/* <CssBaseline />, */}
    <QueryClientProvider client={queryClient}>
      <StoreProvider store = {store}>
        <App />
      </StoreProvider>
    </QueryClientProvider>
  </React.StrictMode>,
   document.getElementById("root")
);