import React from "react";
// import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { Hello } from "./containers/Hello";
import { Hlasky } from "./containers/Hlasky";
import { NewHlasky } from "./containers/NewHlasky";


import { Layout } from './components/layout/Layout'

import { Routes } from './constants'


import "bootstrap/dist/css/bootstrap.min.css";

export class App extends React.PureComponent<Props> {
  render() {

    const {
      location
    } = this.props

    const NotFoundRoute = (
      <React.Fragment>
        <h1>NOT FOUND</h1>
        <h3>Please create better looking Not Found page!!!</h3>
      </React.Fragment>
    )

    // const loginRoute = <Route exact path={Routes.LOGIN} component={Login} />
    const helloRoute = <Route exact path={Routes.EMPTY} component={Hello} />

    const hlaskyRoute = (
      <Route exact path={Routes.CZECH_QUOTE} component={Hlasky} />
    )
    const newHlaskaRoute = (
      <Route exact path={Routes.NEW_QUOTE} component={NewHlasky} />
    )

    // const GeneralLayout =
    //   location.pathname.indexOf('login') !== -1 ||
    //   location.pathname.indexOf('dealerships') !== -1 ||
    //   location.pathname.indexOf('resetPassword') !== -1 ||
    //   // (location.pathname === Routes.EMPTY && !securityContext.isAuthorized) ||
    //   changePassword
    //     ? 'div'
    //     : Layout

const GeneralLayout = Layout

    return (
      <div className="App">
        <GeneralLayout location={location}>
            <Switch location={location}>
              {true && hlaskyRoute}
              {true && helloRoute}
              {true && newHlaskaRoute}
              <Route component={() => NotFoundRoute} />
            </Switch>
         </GeneralLayout>
      </div>
    );
  }
}
