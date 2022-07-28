import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            {/* <Route path="/" exact component={} />
            <Route path="/route1" exact component={} />
            <Route path="/route1:dynamic" exact component={} /> */}
          </Switch> 
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;