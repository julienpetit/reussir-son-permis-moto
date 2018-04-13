import React from 'react';
import Navbar from 'src/components/navbar';
import Footer from 'src/components/footer';
import Jumbotron from 'src/components/jumbotron';
import './landing.css';

export default () => (
  <div className="cover-container d-flex h-100 mx-auto flex-column landing">
    <Navbar />
    <Jumbotron />

    {/*<Footer />*/}
  </div>
);
