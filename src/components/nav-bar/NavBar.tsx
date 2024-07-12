import { useEffect, useState } from 'react';
import React from 'react';
import GeneralButton from '../button/Button.tsx';
import './NavBar.css';

export default function NavBar() {
    return (
        <section className='navBar'>
            <span className='logoSpan'>
                <img className='logoImg' src='src/assets/images/logo.png' alt='Logo' width='50px' height='50px' />
                Taverna Racilor
            </span>
            <section className='navBarButtons'>
                <GeneralButton>Menu</GeneralButton>
                <GeneralButton>Reservations</GeneralButton>
                <GeneralButton>Private Dining</GeneralButton>
                <GeneralButton>Events</GeneralButton>
                <GeneralButton>Order</GeneralButton>
                <GeneralButton>Sign Up</GeneralButton>
            </section>
        </section>
    );
}
