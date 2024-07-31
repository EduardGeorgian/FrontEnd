import React from 'react';

import NavBar from '../components/nav-bar/NavBar';

import Poster from '../components/poster/Poster';

import '../pages/Landing Page.css';
import { FoodCardProps } from '../components/food-card/FoodCard';
import FoodCarousel from '../components/food-carousel/FoodCarousel';

import ScrollComponent from '../components/scroll-button/ScrollButton';

import FooterBanner from '../components/footer-banner/FooterBanner';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductPage from '../pages/ProductPage';

import OrderCartIcon from '../components/order-cart-icon/OrderCartIcon';

import OrderList from '../components/order-list/OrderList';

import { useState } from 'react';

import ClearCartButton from '../components/clear-cart-from-local-storage/ClearCartButton';
let items: FoodCardProps[] = [
    {
        FoodName: 'Barbeque Fish',
        FoodImageUrl: 'src/assets/images/Fish Dishes/barbeque-fish.jpg',
        FoodImageAlt: 'Barbeque Fish',
        FoodPrice: 25,
    },
    {
        FoodName: 'Creamy Salmon Pasta',
        FoodImageUrl: 'src/assets/images/Fish Dishes/Creamy-Salmon-Pasta.webp',
        FoodImageAlt: 'Creamy Salmon Pasta',
        FoodPrice: 20,
    },
    {
        FoodName: 'Whitebait with garlic',
        FoodImageUrl: 'src/assets/images/Fish Dishes/Devilled-Whitebait-with-garlic-mayo.webp',
        FoodImageAlt: 'Whitebait with garlic',
        FoodPrice: 30,
    },
    {
        FoodName: 'Fish Dish',
        FoodImageUrl: 'src/assets/images/Fish Dishes/FishDish.jpg',
        FoodImageAlt: 'Fish Dish',
        FoodPrice: 14.99,
    },
    {
        FoodName: 'One Pan Fish Stew',
        FoodImageUrl: 'src/assets/images/Fish Dishes/One-Pan-Fish-Stew.webp',
        FoodImageAlt: 'One Pan Fish Stew',
        FoodPrice: 20,
    },
    {
        FoodName: 'Paprika a Cod',
        FoodImageUrl: 'src/assets/images/Fish Dishes/One-Pop-Paprika-a-Cod-and-Chickpeas.webp',
        FoodImageAlt: 'Paprika a Cod',
        FoodPrice: 20,
    },
    {
        FoodName: 'Cod with Butter',
        FoodImageUrl: 'src/assets/images/Fish Dishes/Pan-Fried-Cod-with-Butter-Beans.webp',
        FoodImageAlt: 'Cod with Butter',
        FoodPrice: 20,
    },
];

let items2: FoodCardProps[] = [
    {
        FoodName: 'Cucumber Sandwiches',
        FoodImageUrl: 'src/assets/images/Starters/Cucumber-Sandwiches.jpg',
        FoodImageAlt: 'Cucumber Sandwiches',
        FoodPrice: 10,
    },
    {
        FoodName: 'Lamb Skewers',
        FoodImageUrl: 'src/assets/images/Starters/Honey-Mint-Lamb-Skewers.jpg',
        FoodImageAlt: 'Lamb Skewers',
        FoodPrice: 15,
    },
    {
        FoodName: 'Olive and Cheese',
        FoodImageUrl: 'src/assets/images/Starters/Marinated-Olive&Cheese-Ring.jpg',
        FoodImageAlt: 'Olive and Cheese',
        FoodPrice: 10,
    },
];

export default function landingPage() {
    return (
        <div className='landingPage'>
            <NavBar />
            <br></br>
            <br></br>
            <Poster
                bigMessage={'A modern American steakhouse in the heart of Chicago'}
                smallMessage={'Delivering the best of Chicago to your table'}
                button1Label={'Order Delivery'}
                button2Label={'Reserve a Table'}
            />
            <br></br>
            <br></br>
            <h2 className='carousel-title1'>Fish Dishes</h2>
            <FoodCarousel items={items} />
            <h2 className='carousel-title2'>Starters</h2>
            <FoodCarousel items={items2} />
            <br></br>
            <br></br>
            <FooterBanner />
            <ClearCartButton />
        </div>
    );
}
