import React from 'react';
import Carousel from '../../Components/Carousel/Carousel';
import Header from '../../Components/Header/Header';

const Home = () => {

    return (
        <div className="App-background">
          <Header/>
          <div className="container mt-4">
            <Carousel/>
          </div>
        </div>
    );
};

export default Home;