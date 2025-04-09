import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import SearchBar from '@/components/SearchBar';
import SearchFilters from '@/components/SearchFilters';
import CarCard from '@/components/CarCard';
import CarDetails from '@/components/CarDetails';
import Pagination from '@/components/Pagination';
import { Car, FilterOptions, SortOption } from '@/types';
import { useCallback } from 'react';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalCars, setTotalCars] = useState(0);
  const [filters, setFilters] = useState<FilterOptions>({
    brand: 'All',
    priceRange: { min: 0, max: 1000000 },
    fuelType: 'All',
    seatingCapacity: 0
  });
  const [sortOption, setSortOption] = useState<SortOption>({
    field: 'price',
    direction: 'asc'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const carsPerPage = 10;

  const fetchCars = useCallback(async () => {
    setIsLoading(true);
    setError(null);
  
    try {
      // Build query parameters
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: carsPerPage.toString(),
        sort: sortOption.field,
        direction: sortOption.direction
      });
  
      if (filters.brand !== 'All') {
        params.append('brand', filters.brand);
      }
  
      if (filters.priceRange.min > 0) {
        params.append('minPrice', filters.priceRange.min.toString());
      }
  
      if (filters.priceRange.max < 1000000) {
        params.append('maxPrice', filters.priceRange.max.toString());
      }
  
      if (filters.fuelType !== 'All') {
        params.append('fuelType', filters.fuelType);
      }
  
      if (filters.seatingCapacity > 0) {
        params.append('seatingCapacity', filters.seatingCapacity.toString());
      }
  
      // Add search query if present
      if (searchQuery) {
        params.append('search', searchQuery);
      }
  
      const response = await fetch(`/api/cars?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch cars');
      }
  
      const data = await response.json();
      setCars(data.cars);
      setTotalCars(data.total);
      setTotalPages(Math.ceil(data.total / carsPerPage));
    } catch (err) {
      setError('Error fetching cars. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, sortOption, filters, searchQuery]);

  // Fetch cars when filters, sort, or page changes
  useEffect(() => {
    fetchCars();
  }, [filters, sortOption, currentPage, searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSortChange = (newSortOption: SortOption) => {
    setSortOption(newSortOption);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardClick = (car: Car) => {
    setSelectedCar(car);
  };

  const handleCloseDetails = () => {
    setSelectedCar(null);
  };

  const handleWishlistChange = () => {
    // Refresh the current view to update wishlist status indicators
    fetchCars();
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Car Finder</h1>
          <p className="text-gray-600 dark:text-gray-400">{totalCars} cars available</p>
        </div>
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar with filters */}
            <div className="lg:w-1/4">
              <SearchFilters onFilterChange={handleFilterChange} initialFilters={filters} />
            </div>
            
            {/* Main content */}
            <div className="lg:w-3/4">
              <SearchBar onSearch={handleSearch} onSort={handleSortChange} initialQuery={searchQuery} />
        
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : cars.length === 0 ? (
                <div className="text-center py-10">
                  <h3 className="text-xl font-medium">No cars found</h3>
                  <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cars.map((car) => (
                    <CarCard 
                      key={car.id} 
                      car={car} 
                      onClick={() => handleCardClick(car)}
                      onWishlistChange={handleWishlistChange}
                    />
                  ))}
                </div>
              )}
              
              {totalPages > 1 && (
                <div className="mt-8">
                  <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={handlePageChange} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {selectedCar && (
        <CarDetails 
          car={selectedCar} 
          onClose={handleCloseDetails} 
          onWishlistChange={handleWishlistChange}
        />
      )}
    </Layout>
  );
}
