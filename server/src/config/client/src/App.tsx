import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { Route, Switch } from 'react-router-dom'

import { config } from './utils/config'
import './App.scss'
import { Landing } from './components/landing/Landing'
import { Ingredients } from './components/pages/ingredients/ingredients.component'
import { NotFound } from './components/pages/not-found/not-found.component'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/ingredients" component={Ingredients} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
