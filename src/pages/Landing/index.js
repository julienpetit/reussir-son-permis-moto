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
        <div className="col-md-8 d-flex flex-column justify-content-center">
          <Leading />
          <div className="store-buttons">
            <MobileStoreButton
              store="ios"
              height={60}
              width={200}
              url="https://itunes.apple.com/fr/app/r%C3%A9ussir-son-permis-moto/id820931415?mt=8"
            />
            <MobileStoreButton
              store="android"
              height={60}
              width={200}
              url="https://play.google.com/store/apps/details?id=fr.julienpetit.reussirSonPermisMoto&hl=fr"
            />
          </div>
        </div>
        <div className="col-md-4 d-xs-none d-flex justify-content-center">
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
