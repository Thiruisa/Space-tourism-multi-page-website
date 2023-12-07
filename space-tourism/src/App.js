import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Header } from "./components"

export default function App() {
  return (
    <Route>
      <Header />

      <Switch>
        <Route path="/" extact></Route>
      </Switch>

    </Route>
  )
}
