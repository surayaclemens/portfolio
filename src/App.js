import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import HomePage from "./Pages/HomePage/HomePage";
import MorphologyPage from "./Pages/MorphologyPage/MorphologyPage";
import MyWorkPage from './Pages/MyWorkPage/MyWorkPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import CoffeeShopPage from './Pages/CoffeeShopPage/CoffeeShopPage';
import OddRealmPage from './Pages/OddRealmPage/OddRealmPage';
import CedulifyPage from './Pages/CedulifyPage/CedulifyPage';
import AlatuliePage from './Pages/AlatuliePage/AlatuliePage';
import { useState, useEffect } from 'react';
import sunIcon from './Assets/sun-icon.png';
import moonIcon from './Assets/moon-icon.png';
import Footer from './Components/Footer/Footer';
import TopNav from './Components/Nav/TopNav';

function App (){

    document.title="suraya clemens | web developer"

    // set default to light mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toDarkMode = () => {
      setIsDarkMode(true);
      console.log('dark mode:', isDarkMode)
    };

    const toLightMode = () => {
      setIsDarkMode(false);
      console.log('darkmode:', isDarkMode)
    };

    return (
      <div className={isDarkMode ? 'app app--dark-mode' : 'app'}>
        <BrowserRouter>
          <TopNav isDarkMode={isDarkMode} />
          <Switch>
            <Route path="/" exact component={HomePage} isDarkMode={isDarkMode} />
            <Route path="/morphology" component={MorphologyPage} />
            {/* <Route path="/coffeeshop" component={CoffeeShopPage} /> */}
            <Route path="/alatulie" component={AlatuliePage} />
            <Route path="/oddrealm" component={OddRealmPage} />
            <Route path="/cedulify" component={CedulifyPage} />
            <Route path="/mywork" component={MyWorkPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch> 
          <Footer isDarkMode={isDarkMode}/>
        </BrowserRouter>
        <div className='mode-box'>
          <img
            className={isDarkMode? 'mode-icon' : 'mode-icon--hidden'}
            src={sunIcon}
            onClick={toLightMode}
            alt=''
          />
            <img
            className={isDarkMode? 'mode-icon--hidden' : 'mode-icon'}
            src={moonIcon}
            onClick={toDarkMode}
            alt=''
          />
        </div>
      </div>
    );
}

export default App;