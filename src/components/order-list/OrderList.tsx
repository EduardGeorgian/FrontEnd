import React, { useEffect, useState } from 'react';
import './OrderList.css';
import { getOrders, saveOrdersToLocalStorage, getPrices, savePricesToLocalStorage } from '../orderCounter';
import { decrementOrderCount } from '../orderCounter';
import { useOrderContext } from '../../OrderContext';

const OrderList = () => {
    const { orders, prices, removeOrder } = useOrderContext();
    const totalPrice = prices.reduce((accumulator, currentPrice) => accumulator + currentPrice, 0);
    return (
        <div className='order-list-wrapper'>
            <h1>Current Orders</h1>
            {orders.length === 0 ? (
                <p>No orders placed yet.</p>
            ) : (
                <ul className='order-list'>
                    {orders.map((order, index) => (
                        <li className='order-list-children' key={index}>
                            {order}
                            <span>${prices[index]}</span>
                            <button
                                className='x-button'
                                onClick={() => {
                                    removeOrder(index);
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <section>
                <b>Total: ${totalPrice.toFixed(2)} </b>
            </section>
        </div>
    );
};

export default OrderList;
