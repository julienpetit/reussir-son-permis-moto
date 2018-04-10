import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import Navbar from 'src/layout/Navbar/index';
import './landing.css';

export default () => (
  <div className="cover-container d-flex h-100 mx-auto flex-column landing">
    <header className="masthead mb-auto">
      <Navbar />
    </header>

    <main role="main" className="inner cover container">
      <h1 className="cover-heading">Réussir son permis moto</h1>
      <p className="lead">La meilleure façon d'obtenir son permis moto</p>
      <p className="lead">
        <MobileStoreButton
          store="ios"
          url="https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8"
        />

        <MobileStoreButton
          store="android"
          url="https://itunes.apple.com/us/app/all-of-the-lights/id959389722?mt=8"
        />
      </p>
    </main>

    <footer className="mastfoot mt-auto text-center footer">
      <div className="inner">
        <p>
          Created with love in Nantes by{' '}
          <a href="https://twitter.com/julien_petit" target="_blank">
            @julien_petit
          </a>.
        </p>
      </div>
    </footer>
  </div>
);
