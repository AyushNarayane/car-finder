import { Car } from '@/types';

const WISHLIST_KEY = 'car-finder-wishlist';

// Get wishlist from localStorage
export const getWishlist = (): Car[] => {
  if (typeof window === 'undefined') return [];
  
  const wishlistJson = localStorage.getItem(WISHLIST_KEY);
  if (!wishlistJson) return [];
  
  try {
    return JSON.parse(wishlistJson);
  } catch (error) {
    console.error('Failed to parse wishlist from localStorage', error);
    return [];
  }
};

// Add car to wishlist
export const addToWishlist = (car: Car): Car[] => {
  const currentWishlist = getWishlist();
  
  // Check if car is already in wishlist
  if (!currentWishlist.some(item => item.id === car.id)) {
    const newWishlist = [...currentWishlist, car];
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(newWishlist));
    return newWishlist;
  }
  
  return currentWishlist;
};

// Remove car from wishlist
export const removeFromWishlist = (carId: number): Car[] => {
  const currentWishlist = getWishlist();
  const newWishlist = currentWishlist.filter(car => car.id !== carId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(newWishlist));
  return newWishlist;
};

// Check if car is in wishlist
export const isInWishlist = (carId: number): boolean => {
  const currentWishlist = getWishlist();
  return currentWishlist.some(car => car.id === carId);
};

// Clear wishlist
export const clearWishlist = (): void => {
  localStorage.removeItem(WISHLIST_KEY);
};