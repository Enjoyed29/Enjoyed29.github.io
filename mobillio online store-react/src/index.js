import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Page from './views/page'
import RetroBowl from './views/retro-bowl'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Page} exact path="/page" />
        <Route component={RetroBowl} exact path="/retro-bowl" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
