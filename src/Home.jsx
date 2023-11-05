import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Easy from './components/levels/Easy'
import Flip from './components/flipGame/Flip'
import App from './App'

function Home() {
  return (
    <div>
      <Router>
        <App />
        <Switch>
            <Route path='/easylevel' exact component={Easy}/>
            <Route exact path='/flip' component={Flip}/>
        </Switch>
      </Router>
    </div>
  )
}

export default Home