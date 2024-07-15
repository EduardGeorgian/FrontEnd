import React, { Children } from 'react';

import './FooterBanner.css';
import Button from '../button/Button';

export default function FooterBanner() {
    return (
        <div className='footer-banner-container'>
            <img className='image' src='src\assets\images\logo.png' />
            <section className='footer-banner-right-section'>
                <h2 className='title'>Join us for a culinary experience</h2>
                <p className='paragraph'>
                    Our menu is designed to take you on a journey of flavor, with locally-sourced ingredients and artful presentation. From
                    our signature steaks to our fresh seafood and garden-fresh salads, every dish is made with care and passion.
                </p>
                <Button className='footer-button'>View Full Menu</Button>
            </section>
        </div>
    );
}
