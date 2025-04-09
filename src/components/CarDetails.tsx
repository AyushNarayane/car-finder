import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Car } from '@/types';
import { addToWishlist, removeFromWishlist, isInWishlist } from '@/utils/wishlist';

interface CarDetailsProps {
  car: Car;
  onClose: () => void;
  onWishlistChange?: () => void;
}

export default function CarDetails({ car, onClose, onWishlistChange }: CarDetailsProps) {
  const [inWishlist, setInWishlist] = useState(false);
  
  useEffect(() => {
    setInWishlist(isInWishlist(car.id));
  }, [car.id]);
  
  const handleWishlistToggle = () => {
    if (inWishlist) {
      removeFromWishlist(car.id);
      setInWishlist(false);
    } else {
      addToWishlist(car);
      setInWishlist(true);
    }
    
    if (onWishlistChange) {
      onWishlistChange();
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <div className="h-64 sm:h-80 w-full relative">
            <Image 
              src={car.imageUrl} 
              alt={`${car.brand} ${car.model}`}
              fill
              className="object-cover"
            />
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-700 rounded-full shadow-md"
            aria-label="Close details"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{car.brand} {car.model} ({car.year})</h2>
            <button 
              onClick={handleWishlistToggle}
              className="p-2 flex items-center justify-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm"
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
              <span className="text-sm font-medium">
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </span>
            </button>
          </div>
          
          <div className="mt-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">${car.price.toLocaleString()}</span>
          </div>
          
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="text-gray-500 dark:text-gray-400">Fuel Type</div>
              <div className="font-medium text-gray-900 dark:text-white">{car.fuelType}</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="text-gray-500 dark:text-gray-400">Seating</div>
              <div className="font-medium text-gray-900 dark:text-white">{car.seatingCapacity} seats</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="text-gray-500 dark:text-gray-400">Transmission</div>
              <div className="font-medium text-gray-900 dark:text-white">{car.transmission}</div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
              <div className="text-gray-500 dark:text-gray-400">Mileage</div>
              <div className="font-medium text-gray-900 dark:text-white">{car.mileage > 0 ? `${car.mileage} mpg` : 'Electric'}</div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Description</h3>
            <p className="text-gray-700 dark:text-gray-300">{car.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}