import React, { useRef } from 'react';

import './FoodCarousel.css';

import FoodCard from '../food-card/FoodCard';
import { FoodCardProps } from '../food-card/FoodCard';

interface FoodCarouselProps {
    items: FoodCardProps[];
}
export default function FoodCarousel({ items }: FoodCarouselProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const handleScroll = (event) => {
        event.preventDefault();

        carouselRef.current!.scrollBy({
            left: event.deltaY < 0 ? -180 : 180,
            behavior: 'smooth',
        });
    };
    return (
        <div className='food-carousel' ref={carouselRef} onWheel={handleScroll}>
            {items.map((item) => (
                <FoodCard {...item} />
            ))}
        </div>
    );
}
