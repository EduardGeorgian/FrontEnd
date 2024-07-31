import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './OrderCartIcon.css';

import { getOrderCount } from '../orderCounter';

export interface OrderCartIconProps {
    orderNumber: number;
}

export default function OrderCartIcon({ orderNumber = 0 }) {
    const orderCount = getOrderCount();
    return (
        <div className='cart-icon-wrapper'>
            <FontAwesomeIcon className='cart-icon' icon={faCartShopping} />
            <div className='cart-icon-notif'>{orderCount}</div>
        </div>
    );
}
