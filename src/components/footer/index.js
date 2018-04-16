import React from 'react';
import './footer.css';

const Footer = () => (
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
);

export default Footer;
