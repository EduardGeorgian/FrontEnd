import React from 'react';

import './FoodCarousel.css';

import FoodCard from '../food-card/FoodCard';
import { FoodCardProps } from '../food-card/FoodCard';

interface FoodCarouselProps {
    items: FoodCardProps[];
}
export default function FoodCarousel({ items }: FoodCarouselProps) {
    return (
        <div className='food-carousel'>
            {items.map((item) => (
                <FoodCard {...item} />
            ))}
        </div>
    );
}
