import React from 'react';
import '../food-card/FoodCard.css';

export interface FoodCardProps {
    FoodName: string;
    FoodImageUrl: string;
    FoodPrice: number;
    FoodImageAlt: string;
}

export default function FoodCard({ FoodName, FoodImageUrl, FoodPrice, FoodImageAlt = 'FOOD' }: FoodCardProps) {
    FoodImageAlt = FoodName;
    return (
        <div className='food-card'>
            <img className='food-card-image' src={FoodImageUrl} alt={FoodImageAlt}></img>
            <h3 className='food-card-name'>{FoodName}</h3>
            <p className='food-card-price'>${FoodPrice}</p>
        </div>
    );
}
