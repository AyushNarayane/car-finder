import { useState, useEffect, JSX } from 'react';
import React from 'react';
import Image from 'next/image';
import { Car } from '@/types';
import { addToWishlist, removeFromWishlist, isInWishlist } from '@/utils/wishlist';

interface CarCardProps {
  car: Car;
  onWishlistChange?: () => void;
  onClick?: (car: Car) => void;
  onRemoveFromWishlist?: (carId: string) => void;
}

export default React.memo(function CarCard({ car, onWishlistChange, onClick, onRemoveFromWishlist }: CarCardProps): JSX.Element {
  const inWishlist = isInWishlist(car.id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (inWishlist) {
      removeFromWishlist(car.id);
      onRemoveFromWishlist?.(car.id.toString());
    } else {
      addToWishlist(car);
    }
    
    onWishlistChange?.();
  };
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg cursor-pointer"
      onClick={() => onClick && onClick(car)}
    >
      <div className="relative h-48 w-full">
        <Image 
          src={car.imageUrl} 
          alt={`${car.brand} ${car.model}`}
          fill
          className="object-cover"
        />
        <button 
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md"
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill={inWishlist ? 'currentColor' : 'none'} 
            stroke="currentColor" 
            className={`w-5 h-5 ${inWishlist ? 'text-red-500' : 'text-gray-500 dark:text-gray-300'}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{car.brand} {car.model}</h3>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900 dark:text-gray-100">${car.price.toLocaleString()}</span>
          <span className="text-sm text-gray-600 dark:text-gray-300">{car.year}</span>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{car.seatingCapacity} seats</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>{car.mileage > 0 ? `${car.mileage} mpg` : 'Electric'}</span>
          </div>
        </div>
      </div>
    </div>
  );
});