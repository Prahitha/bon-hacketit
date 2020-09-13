import React from 'react';
import RecipeSearch from './components/recipeSearch';
import Header from './components/header';
import SignUp from './components/signUp';
import Game from './components/game';
import Scanner from './components/qrReader';
import Visualization from './components/visualization';
import ItemList from './components/itemList';
import Home from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/scanner">
            <Scanner />
          </Route>
          <Route path="/search">
            <RecipeSearch />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
          <Route path="/nutritionBreakdown">
            <Visualization />
          </Route>
          <Route path="/itemlist">
            <ItemList />
          </Route>
          <Route path="/"> {/* default route has to be at the end */}
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;