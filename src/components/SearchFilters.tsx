import { useState, useEffect } from 'react';
import { brands, fuelTypes, seatingCapacities, priceRanges } from '@/data/cars';
import { FilterOptions } from '@/types';

interface SearchFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  initialFilters?: FilterOptions;
}

export default function SearchFilters({ onFilterChange, initialFilters }: SearchFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters || {
    brand: 'All',
    priceRange: { min: 0, max: 1000000 },
    fuelType: 'All',
    seatingCapacity: 0
  });

  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  const handleFilterChange = (filterName: string, value: any) => {
    let updatedFilters;
    
    if (filterName === 'priceRange') {
      updatedFilters = {
        ...filters,
        priceRange: value
      };
    } else {
      updatedFilters = {
        ...filters,
        [filterName]: value
      };
    }
    
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Filter Cars</h2>
      
      <div className="space-y-4">
        {/* Brand Filter */}
        <div>
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Brand
          </label>
          <select
            id="brand"
            value={filters.brand}
            onChange={(e) => handleFilterChange('brand', e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="All">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Price Range
          </label>
          <select
            id="priceRange"
            value={`${filters.priceRange.min}-${filters.priceRange.max}`}
            onChange={(e) => {
              const [min, max] = e.target.value.split('-').map(Number);
              handleFilterChange('priceRange', { min, max });
            }}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="0-1000000">All Prices</option>
            {priceRanges.map((range) => (
              <option key={`${range.min}-${range.max}`} value={`${range.min}-${range.max}`}>
                {range.label}
              </option>
            ))}
          </select>
        </div>

        {/* Fuel Type Filter */}
        <div>
          <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Fuel Type
          </label>
          <select
            id="fuelType"
            value={filters.fuelType}
            onChange={(e) => handleFilterChange('fuelType', e.target.value)}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="All">All Fuel Types</option>
            {fuelTypes.map((fuelType) => (
              <option key={fuelType} value={fuelType}>
                {fuelType}
              </option>
            ))}
          </select>
        </div>

        {/* Seating Capacity Filter */}
        <div>
          <label htmlFor="seatingCapacity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Minimum Seats
          </label>
          <select
            id="seatingCapacity"
            value={filters.seatingCapacity}
            onChange={(e) => handleFilterChange('seatingCapacity', Number(e.target.value))}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="0">Any</option>
            {seatingCapacities.sort((a, b) => a - b).map((capacity) => (
              <option key={capacity} value={capacity}>
                {capacity}+ seats
              </option>
            ))}
          </select>
        </div>

        {/* Reset Filters Button */}
        <button
          onClick={() => {
            const defaultFilters = {
              brand: 'All',
              priceRange: { min: 0, max: 1000000 },
              fuelType: 'All',
              seatingCapacity: 0
            };
            setFilters(defaultFilters);
            onFilterChange(defaultFilters);
          }}
          className="w-full mt-2 py-2 px-4 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}