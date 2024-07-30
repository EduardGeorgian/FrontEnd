import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../food-card/FoodCard.css';

export interface FoodCardProps {
    FoodName: string;
    FoodImageUrl: string;
    FoodPrice: number;
    FoodImageAlt: string;
}

export default function FoodCard({ FoodName, FoodImageUrl, FoodPrice, FoodImageAlt = 'FOOD' }: FoodCardProps) {
    FoodImageAlt = FoodName;
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/product/${FoodName}`)} className='food-card-link'>
            <div className='food-card'>
                <img className='food-card-image' src={FoodImageUrl} alt={FoodImageAlt} />
                <h3 className='food-card-name'>{FoodName}</h3>
                <p className='food-card-price'>${FoodPrice}</p>
            </div>
        </div>
    );
}
