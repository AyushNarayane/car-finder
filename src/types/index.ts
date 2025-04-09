export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  fuelType: string;
  seatingCapacity: number;
  mileage: number;
  transmission: string;
  imageUrl: string;
  description: string;
}

export interface FilterOptions {
  brand: string;
  priceRange: {
    min: number;
    max: number;
  };
  fuelType: string;
  seatingCapacity: number;
}

export interface SortOption {
  field: string;
  direction: 'asc' | 'desc';
}