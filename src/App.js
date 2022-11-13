import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import HomePage from "./Pages/HomePage/HomePage";
import TetrisPage from "./Pages/TetrisPage/TetrisPage";
import MePage from './Pages/MePage/MePage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/ayajuthemtetris" component={TetrisPage} />
            <Route path="/moreaboutme" component={MePage} />
            {/* <Route path="/website" component={WebsitePage} /> */}


            {/* <Route path="/route1:dynamic" exact component={} /> */}
          </Switch> 
        </BrowserRouter>
      </div>
    );
  }
}

export default App;