import React from 'react';
import MobileStoreButton from 'react-mobile-store-button';
import Device from 'src/components/device';
import './jumbotron.css';

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-md-7 col-left d-flex align-items-end justify-content-center">
          <div className="store-buttons">
            <h1 className="display-4 title">Réussir son permis moto</h1>
            <p className="lead">Disponible sur iOS et Android</p>

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
        <div className="col-md-5 col-right d-flex justify-content-center">
          <Device />
        </div>
      </div>
    </div>
  </div>
);

export default Jumbotron;
