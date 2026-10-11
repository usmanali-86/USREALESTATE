import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IMG } from '../data.js';
import './PropertySearchCTA.css';

/** Independent banner component. Only this section has been restyled. */
export default function PropertySearchCTA() {
  return (
    <section className="property-search-cta" aria-label="Start your property search">
      <div className="property-search-cta__photo" style={{ backgroundImage: `url("${IMG.cta}")` }} aria-hidden="true" />
      <div className="property-search-cta__shade" aria-hidden="true" />
      <div className="container property-search-cta__inner">
        <div className="property-search-cta__copy">
          <span className="property-search-cta__label">READY TO EXPLORE?</span>
          <h2>Start Your Property Search Today</h2>
          <p>Create your free account and view two properties free.<br className="property-search-cta__desktop-break" /> Unlock unlimited access for 30 days for just $4.98.</p>
        </div>
        <a className="btn btn-red property-search-cta__button" href="#finder">
          Explore Properties <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
