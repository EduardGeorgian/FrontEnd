import React, { createContext, useState, useContext, ReactNode } from 'react';

interface OrderContextType {
    orders: string[];
    prices: string[];
    addOrder: (order: string, price: string) => void;
    removeOrder: (index: number) => void;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [orders, setOrders] = useState<string[]>([]);
    const [prices, setPrices] = useState<string[]>([]);

    const addOrder = (order: string, price: string) => {
        setOrders((prevOrders) => [...prevOrders, order]);
        setPrices((prevPrices) => [...prevPrices, price]);
    };

    const removeOrder = (index: number) => {
        setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));
        setPrices((prevPrices) => prevPrices.filter((_, i) => i !== index));
    };

    return <OrderContext.Provider value={{ orders, prices, addOrder, removeOrder }}>{children}</OrderContext.Provider>;
};

export const useOrderContext = () => {
    const context = useContext(OrderContext);
    if (context === undefined) {
        throw new Error('useOrderContext must be used within an OrderProvider');
    }
    return context;
};
