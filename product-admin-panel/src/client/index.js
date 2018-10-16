import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// apollo
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import Routes from "routes";
import store from "./redux/store";

const httpLink = new HttpLink({ uri: "http://localhost:3000" });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById("app")
);
if (module.hot) {
  module.hot.accept();
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then(registration => {
//         // console.log('SW registered: ', registration)
//       })
//       .catch(registrationError => {
//         // console.log('SW registration failed: ', registrationError)
//       })
//   })
// }
