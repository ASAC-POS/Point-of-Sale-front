import React from 'react';
import './section.scss';
import illustrationImg from '../../assets/Finance leaders-bro.png';

function Section() {
  return (
    <section className='section-1'>
      <div className='groups'>
        <img
          src={illustrationImg}
          alt='illustration'
          className='illustration-img'
        />
        <p>
          Pull your profits up with Bayya3 &trade;, The number one point of sale
          system in the market. Join now and enjoy safe and smooth transaction,
          Simple inventory management, secure database for all your products and
          employees.
        </p>
      </div>
    </section>
  );
}

export default Section;
