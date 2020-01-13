/*!

=========================================================
* Now UI Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/now-ui-dashboard.scss?v1.2.0";
import "assets/css/demo.css";
import AdminLayout from "layouts/Admin.jsx";
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http';
import ApolloLinkTimeout from 'apollo-link-timeout';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

const timeoutLink = new ApolloLinkTimeout(10000)
const httpLink = createHttpLink({ uri: "http://localhost:4000/graphql" });
const timeoutHttpLink = timeoutLink.concat(httpLink);

const hist = createBrowserHistory();

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  link: timeoutHttpLink,
  cache: new InMemoryCache()
})

//En render se envía todos los datos de metodos render como history,match,location
//Eso significa props, ya que render actua como el component, pero refresca el componente y no lo carga de nuevo
ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Redirect to="/admin/dashboard" />
        </Switch>
      </Router>
    </ApolloHooksProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
