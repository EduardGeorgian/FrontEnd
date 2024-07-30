import React from 'react';
import Button from '../button/Button';
import '../poster/Poster.css';

export default function Poster({ bigMessage, smallMessage, button1Label, button2Label }) {
    return (
        <div className='poster'>
            <span className='messages'>
                <h1>{bigMessage}</h1>
                <p>{smallMessage}</p>
            </span>
            <span className='buttons'>
                <Button className='poster-buttons main-button'>Order Delivery</Button>
                <Button className='poster-buttons second-button'>Reserve a Table</Button>
            </span>
        </div>
    );
}
