import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the shape of the context data
interface OrderContextType {
    orders: string[];
    prices: number[];
    addOrder: (order: string, price: number) => void;
    removeOrder: (index: number) => void;
}

// Create a context with a default undefined value
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Component that provides context data to its children
export const OrderProvider = ({ children }: { children: ReactNode }) => {
    // Define state variables for orders and prices, initializing them from localStorage
    const [orders, setOrders] = useState<string[]>(() => {
        const savedOrders = localStorage.getItem('orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    const [prices, setPrices] = useState<number[]>(() => {
        const savedPrices = localStorage.getItem('prices');
        return savedPrices ? JSON.parse(savedPrices) : [];
    });

    // Save orders and prices to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        localStorage.setItem('prices', JSON.stringify(prices));
    }, [prices]);

    // Function to add a new order and price
    const addOrder = (order: string, price: number) => {
        setOrders((prevOrders) => [...prevOrders, order]);
        setPrices((prevPrices) => [...prevPrices, price]);
    };

    // Function to remove an order and corresponding price
    const removeOrder = (index: number) => {
        setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
        setPrices((prevPrices) => prevPrices.filter((_, i) => i !== index));
    };

    // Provide the context values to child components
    return <OrderContext.Provider value={{ orders, prices, addOrder, removeOrder }}>{children}</OrderContext.Provider>;
};

// Custom hook to use the OrderContext in components
export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error('useOrderContext must be used within an OrderProvider');
    }
    return context;
};
