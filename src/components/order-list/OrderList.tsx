import React, { useEffect, useState } from 'react';
import './OrderList.css';
import { getOrders, saveOrdersToLocalStorage, getPrices, savePricesToLocalStorage } from '../orderCounter';
import { decrementOrderCount } from '../orderCounter';
import { useOrderContext } from '../../OrderContext';

const OrderList = () => {
    /*const [orders, setOrders] = useState<string[]>([]);
    const [prices, setPrices] = useState<string[]>([]);

    useEffect(() => {
        setOrders(getOrders());
    }, []);

    useEffect(() => {
        setPrices(getPrices());
    }, []);

    const handleDeleteOrder = (indexToRemove: number) => {
        const updatedOrders = orders.filter((_, index) => index !== indexToRemove);
        const updatedPrices = prices.filter((_, index) => index !== indexToRemove);
        setOrders(updatedOrders);
        saveOrdersToLocalStorage(updatedOrders);
        setPrices(updatedPrices);
        savePricesToLocalStorage(updatedPrices);
    };
    */
    const { orders, prices, removeOrder } = useOrderContext();
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
                                    decrementOrderCount();
                                }}
                            >
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderList;
