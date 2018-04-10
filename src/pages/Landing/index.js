import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import Device from 'src/components/device';
import Leading from 'src/components/leading';
import './landing.css';

export default () => (
  <div className="cover-container d-flex h-100 mx-auto flex-column landing">
    <header className="mb-auto" />

    <main role="main" className="inner cover container">
      <div className="row">
        <div className="col-6 col-6 d-flex flex-column justify-content-center">
          <Leading />
          <p className="lead">
            <MobileStoreButton
              store="ios"
              url="https://itunes.apple.com/fr/app/r%C3%A9ussir-son-permis-moto/id820931415?mt=8"
            />
            <MobileStoreButton
              store="android"
              url="https://play.google.com/store/apps/details?id=fr.julienpetit.reussirSonPermisMoto&hl=fr"
            />
          </p>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <Device />
        </div>
      </div>
    </main>

    <footer className="mastfoot mt-auto text-center footer">
      <div className="inner">
        <p>
          Réalisé avec 🧡 à{' '}
          <span className="footer-nantes">
            <span className="u-highlight-yellow">Na</span>
            <span className="u-highlight-green">nt</span>
            <span className="u-highlight-yellow">es</span>
          </span>{' '}
          par{' '}
          <a href="http://julienpetit.fr" target="_blank">
            Julien Petit
          </a>.
        </p>
      </div>
    </footer>
  </div>
);
