import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import HomePage from "./Pages/HomePage/HomePage";
import TetrisPage from "./Pages/TetrisPage/TetrisPage";
import MePage from './Pages/MePage/MePage';
import CoffeeShopPage from './Pages/CoffeeShopPage/CoffeeShopPage';
import CedulifyPage from './Pages/CedulifyPage/CedulifyPage';
import AlatuliePage from './Pages/AlatuliePage/AlatuliePage';
import { useState} from 'react';
import sunIcon from './Assets/sun-icon.png';
import moonIcon from './Assets/moon-icon.png';


function App (){
  

  // render() {
    document.title="suraya clemens | web developer"

    // set default to light mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
      console.log('isdarkmode:', isDarkMode)
    };

    return (
      <div className={isDarkMode? 'app--dark-mode' : 'app'}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} isDarkMode={isDarkMode}/>
            <Route path="/ayajuthemtetris" component={TetrisPage} />
            <Route path="/coffeeshop" component={CoffeeShopPage} />
            <Route path="/alatulie" component={AlatuliePage} />
            <Route path="/cedulify" component={CedulifyPage} />
            <Route path="/moreaboutme" component={MePage} />
          </Switch> 
        </BrowserRouter>
        <div className='mode-box'>
          <img
            className={isDarkMode? 'mode-icon' : 'mode-icon--hidden'}
            src={sunIcon}
            onClick={toggleDarkMode}
          />
            <img
            className={isDarkMode? 'mode-icon--hidden' : 'mode-icon'}
            src={moonIcon}
            onClick={toggleDarkMode}
          />
        </div>
      </div>
    );
  // }
}

export default App;