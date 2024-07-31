import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import { FoodCardProps } from '../components/food-card/FoodCard';

import OrderButton from '../components/button/Button';
import '../pages/ProductPage.css';
import { OrderCartIconProps } from '../components/order-cart-icon/OrderCartIcon';
import { counter } from '@fortawesome/fontawesome-svg-core';
import OrderCartIcon from '../components/order-cart-icon/OrderCartIcon';
import { addOrder, incrementOrderCount } from '../components/orderCounter';
// Mock product data (replace with actual data source if available)
const products: FoodCardProps[] = [
    {
        FoodName: 'Barbeque Fish',
        FoodImageUrl: String.raw`/assets/images/Fish Dishes/barbeque-fish.jpg`,
        FoodImageAlt: 'Barbeque Fish',
        FoodPrice: 25,
    },
    {
        FoodName: 'Creamy Salmon Pasta',
        FoodImageUrl: '/assets/images/Fish Dishes/Creamy-Salmon-Pasta.webp',
        FoodImageAlt: 'Creamy Salmon Pasta',
        FoodPrice: 20,
    },
    {
        FoodName: 'Whitebait with garlic',
        FoodImageUrl: '/assets/images/Fish Dishes/Devilled-Whitebait-with-garlic-mayo.webp',
        FoodImageAlt: 'Whitebait with garlic',
        FoodPrice: 30,
    },
    {
        FoodName: 'Fish Dish',
        FoodImageUrl: '/assets/images/Fish Dishes/FishDish.jpg',
        FoodImageAlt: 'Fish Dish',
        FoodPrice: 14.99,
    },
    {
        FoodName: 'One Pan Fish Stew',
        FoodImageUrl: '/assets/images/Fish Dishes/One-Pan-Fish-Stew.webp',
        FoodImageAlt: 'One Pan Fish Stew',
        FoodPrice: 20,
    },
    {
        FoodName: 'Paprika a Cod',
        FoodImageUrl: '/assets/images/Fish Dishes/One-Pop-Paprika-a-Cod-and-Chickpeas.webp',
        FoodImageAlt: 'Paprika a Cod',
        FoodPrice: 20,
    },
    {
        FoodName: 'Cod with Butter',
        FoodImageUrl: '/assets/images/Fish Dishes/Pan-Fried-Cod-with-Butter-Beans.webp',
        FoodImageAlt: 'Cod with Butter',
        FoodPrice: 20,
    },
    {
        FoodName: 'Cucumber Sandwiches',
        FoodImageUrl: '/assets/images/Starters/Cucumber-Sandwiches.jpg',
        FoodImageAlt: 'Cucumber Sandwiches',
        FoodPrice: 10,
    },
    {
        FoodName: 'Lamb Skewers',
        FoodImageUrl: '/assets/images/Starters/Honey-Mint-Lamb-Skewers.jpg',
        FoodImageAlt: 'Lamb Skewers',
        FoodPrice: 15,
    },
    {
        FoodName: 'Olive and Cheese',
        FoodImageUrl: '/assets/images/Starters/Marinated-Olive&Cheese-Ring.jpg',
        FoodImageAlt: 'Olive and Cheese',
        FoodPrice: 10,
    },
];

export default function ProductPage() {
    const { foodName } = useParams<{ foodName: string }>();
    const product = products.find((p) => p.FoodName === foodName);

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleOrderClick = () => {
        const newCount = incrementOrderCount();
        const orderArray = addOrder(product.FoodName);
        console.log(`new order added: ${product.FoodName} and order count is now :${newCount}`);
    };
    console.log(foodName, product.FoodImageUrl);

    return (
        <div className='product-page'>
            <img className='product-page-image' src={product.FoodImageUrl} alt={product.FoodImageAlt} />
            <h1>{product.FoodName}</h1>
            <p>Price: ${product.FoodPrice}</p>
            <button className='order-button' onClick={handleOrderClick}>
                Order Now
            </button>
        </div>
    );
}
