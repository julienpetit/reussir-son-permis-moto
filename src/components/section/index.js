import React from 'react';
import cn from 'classnames';
import './section.css';

const Section = ({ children, type, className }) => (
  <section
    className={cn('section', { 'section-light': type === 'light' }, className)}
  >
    <div className="container">{children}</div>
  </section>
);

export default Section;
