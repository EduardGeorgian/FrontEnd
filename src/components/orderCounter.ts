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

export const getOrders = (): string[] => {
    const orders = localStorage.getItem('orders');
    return orders ? JSON.parse(orders) : [];
};

export const addOrder = (orderName: string): void => {
    const orders = getOrders();
    orders.push(orderName);
    localStorage.setItem('orders', JSON.stringify(orders));
};
