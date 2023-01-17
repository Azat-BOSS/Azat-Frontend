import React, { useState, useEffect } from 'react';
import appStyle from "./app.module.css"
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  const [width, setWidth] = useState()
  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width])
  return (
    <>
    {width > 1200 
    ? ( 
      <div className={appStyle.app}>
        <Header/>
        <main>
          <Home/>
        </main>
        <Footer/>
      </div>
    ) : 
    (
    <div className={appStyle.app_block}>
      <h1 className={appStyle.app__title}>Error</h1>
      <p className={appStyle.app__text}>Sorry, but application doesn't work on desktop device, the developer made it so</p>
      <p className={appStyle.app__developer}>@2023, Created By Azat Frontend</p>
    </div>)}
    </>
  );
}

export default App;
