import React from 'react';
import Banner from '../Banner/Banner';
import Category from './Category';
import Gallery from '../Gallery/Gallery';
import Seller from '../Seller';
import useTitle from '../../useTitle';
import About from './About';

const Home = () => {
  useTitle('Home')
    return (
        <div>
          <Banner></Banner>
          <div className="divider"></div> 
          <Gallery></Gallery>
          <div className="divider"></div> 
          <Category></Category>
          <div className="divider"></div> 
          <Seller></Seller>
          <div className="divider"></div> 
          <About></About>
        </div>
    );
};

export default Home;