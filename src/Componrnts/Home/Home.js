import React from 'react';
import Banner from './Banner';
import Exparince from './Exparince';
import Footer from './Footer';
import Header from './Header';
import Searvice from './Searvice';
import Skills from './Skills';




const Home = () => {
    return (
        <div>
          <Header/>
          <Banner/>
          <Searvice/>
          <Skills/>
          <Exparince/>
          <Footer/>
         
        </div>
    );
};

export default Home;