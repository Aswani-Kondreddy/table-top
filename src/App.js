import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/home';
import Details from './Components/details';
import store from './Redux/store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Home/>
        </Route>
      <Route path="/details">
        <Details/>
        </Route>
    </Switch>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
