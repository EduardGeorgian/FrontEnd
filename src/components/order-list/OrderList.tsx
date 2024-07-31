import React, { useEffect, useState } from 'react';
import './OrderList.css';
import { getOrders, saveOrdersToLocalStorage } from '../orderCounter';
import { decrementOrderCount } from '../orderCounter';

const OrderList = () => {
    const [orders, setOrders] = useState<string[]>([]);

    useEffect(() => {
        setOrders(getOrders);
    }, []);

    const handleDeleteOrder = (indexToRemove: number) => {
        const updatedOrders = orders.filter((_, index) => index !== indexToRemove);
        setOrders(updatedOrders);
        saveOrdersToLocalStorage(updatedOrders);
    };
    return (
        <div>
            <h1>Current Orders</h1>
            {orders.length === 0 ? (
                <p>No orders placed yet.</p>
            ) : (
                <ul>
                    {orders.map((order, index) => (
                        <li key={index}>
                            {order}
                            <button
                                onClick={() => {
                                    handleDeleteOrder(index);
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
