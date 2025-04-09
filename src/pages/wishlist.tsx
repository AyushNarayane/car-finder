import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Car } from '@/types';
import { getWishlist, removeFromWishlist } from '@/utils/wishlist';
import CarCard from '@/components/CarCard';
import CarDetails from '@/components/CarDetails';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load wishlist items from localStorage
    loadWishlistItems();
  }, []);

  const loadWishlistItems = () => {
    setIsLoading(true);
    const items = getWishlist();
    setWishlistItems(items);
    setIsLoading(false);
  };

  const handleWishlistChange = () => {
    loadWishlistItems();
  };

  const handleCardClick = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseDetails = () => {
    setSelectedCar(null);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Wishlist</h1>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h2 className="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">Your wishlist is empty</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Start adding cars to your wishlist to see them here.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((car) => (
              <div key={car.id} onClick={() => handleCardClick(car)} className="cursor-pointer">
                <CarCard car={car} onWishlistChange={handleWishlistChange} />
              </div>
            ))}
          </div>
        )}

        {selectedCar && (
          <CarDetails
            car={selectedCar}
            onClose={handleCloseDetails}
            onWishlistChange={handleWishlistChange}
          />
        )}
      </div>
    </Layout>
  );
}