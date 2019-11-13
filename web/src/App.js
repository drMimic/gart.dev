import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from 'component/Header'
import AboutPage from 'component/AboutPage'
import ReactPage from 'component/ReactPage'
import AndroidPage from 'component/AndroidPage'
import SpringPage from 'component/SpringPage'

class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={AboutPage} />
          <Route exact path="/android" component={AndroidPage} />
          <Route exact path="/react" component={ReactPage} />
          <Route exact path="/spring" component={SpringPage} />
        </Switch>
      </>
    )
  }
}

export default App
