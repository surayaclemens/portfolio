import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { Component } from 'react';
import HomePage from "./Pages/HomePage/HomePage";
import TetrisPage from "./Pages/TetrisPage/TetrisPage";
import MyWorkPage from './Pages/MyWorkPage/MyWorkPage';
import ContactPage from './Pages/ContactPage/ContactPage';
import CoffeeShopPage from './Pages/CoffeeShopPage/CoffeeShopPage';
import CedulifyPage from './Pages/CedulifyPage/CedulifyPage';
import AlatuliePage from './Pages/AlatuliePage/AlatuliePage';
import { useState} from 'react';
import sunIcon from './Assets/sun-icon.png';
import moonIcon from './Assets/moon-icon.png';
import Footer from './Components/Footer/Footer';
import TopNav from './Components/Nav/TopNav';



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
          <TopNav/>
          <Switch>
            <Route path="/" exact component={HomePage} isDarkMode={isDarkMode}/>
            <Route path="/morphology" component={TetrisPage} />
            <Route path="/coffeeshop" component={CoffeeShopPage} />
            <Route path="/alatulie" component={AlatuliePage} />
            <Route path="/cedulify" component={CedulifyPage} />
            {/* <Route path="/moreaboutme" component={MePage} /> */}
            <Route path="/mywork" component={MyWorkPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch> 
          <Footer/>
        </BrowserRouter>
        <div className='mode-box'>
          <img
            className={isDarkMode? 'mode-icon' : 'mode-icon--hidden'}
            src={sunIcon}
            onClick={toggleDarkMode}
            alt=''
          />
            <img
            className={isDarkMode? 'mode-icon--hidden' : 'mode-icon'}
            src={moonIcon}
            onClick={toggleDarkMode}
            alt=''
          />
        </div>
      </div>
    );
  // }
}

export default App;