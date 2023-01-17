import React from 'react';
import appStyle from "./app.module.css"
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className={appStyle.app}>
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
