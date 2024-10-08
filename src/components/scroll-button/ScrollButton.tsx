import React, { useRef } from 'react';

import { FoodCardProps } from '../food-card/FoodCard';
import FoodCarousel from '../food-carousel/FoodCarousel';
import { useHorizontalScroll } from '../../hooks/scroll-hook';

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

function ScrollComponent() {
    const scrollRef = useHorizontalScroll();

    const handleScroll = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            <button onClick={handleScroll}></button>
            <FoodCarousel items={items} />
        </div>
    );
}

export default ScrollComponent;
