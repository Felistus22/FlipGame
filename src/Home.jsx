import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Easy from './components/levels/Easy'
import App from './App'

function Home() {
  return (
    <div>
      <Router>
        <App />
        <Switch>
            <Route path='/easylevel' exact component={Easy}/>
        </Switch>
      </Router>
    </div>
  )
}

export default Home