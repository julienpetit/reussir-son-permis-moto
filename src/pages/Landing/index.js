import React from 'react';
import Navbar from 'src/components/navbar';
import Section from 'src/components/section';
import Card from 'src/components/card';
import Footer from 'src/components/footer';
import Jumbotron from 'src/components/jumbotron';
import './landing.css';
import icon from './home-icon.png';

export default () => (
  <div className="cover-container d-flex h-100 mx-auto flex-column landing">
    <Navbar />
    <Jumbotron />

    <Section className="text-center">
      <h2>Découvrez tous les outils pour réussir votre permis</h2>
      <p className="lead">A - A1 - A2</p>
    </Section>
    <Section type="light">
      <div className="d-flex justify-content-between">
        <Card title="Les 12 fiches du permis moto" imageSrc={icon} />
        <Card title="Les 8 parcours illustrés" imageSrc={icon} />
        <Card title="Des quiz avec plus de 200 questions" imageSrc={icon} />
        <Card title="Mise à jour régulières" imageSrc={icon} />
      </div>
    </Section>

    {/*<Section className='text-center'>*/}
    {/*<h2>Ils nous font confiance</h2>*/}
    {/*<p className="lead">dssdgdfsg fsgs g sdfdf gds</p>*/}
    {/*</Section>*/}

    <Footer />
  </div>
);
