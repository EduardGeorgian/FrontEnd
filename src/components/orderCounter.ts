import { faBullseye } from '@fortawesome/free-solid-svg-icons';

// orderCounter.ts
export const getOrderCount = (): number => {
    const orderCount = localStorage.getItem('orderCount');
    return orderCount ? parseInt(orderCount, 10) : 0;
};

export const incrementOrderCount = (): number => {
    const newCount = getOrderCount() + 1;
    localStorage.setItem('orderCount', newCount.toString());
    return newCount;
};

export const decrementOrderCount = (): number => {
    const newCount = getOrderCount() - 1;
    localStorage.setItem('orderCount', newCount.toString());
    return newCount;
};

export const addOrder = (orderName: string): void => {
    const orders = getOrders();
    orders.push(orderName);
    localStorage.setItem('orders', JSON.stringify(orders));
};
export const getOrders = (): string[] => {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
};

export const saveOrdersToLocalStorage = (orders: string[]) => {
    localStorage.setItem('orders', JSON.stringify(orders));
};

export const changeFlag = (flag: boolean) => {
    if (flag === true) flag = false;
    else flag = true;
};

export const getPrices = (): string[] => {
    const prices = localStorage.getItem('prices');
    return prices ? JSON.parse(prices) : [];
};

export const savePricesToLocalStorage = (prices: string[]) => {
    localStorage.setItem('prices', JSON.stringify(prices));
};

export const addPrice = (price: string): void => {
    const prices = getPrices();
    prices.push(price);
    localStorage.setItem('prices', JSON.stringify(prices));
};
