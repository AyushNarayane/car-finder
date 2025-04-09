import type { NextApiRequest, NextApiResponse } from 'next';
import { cars } from '@/data/cars';
import { Car } from '@/types';

type ResponseData = {
  cars: Car[];
  total: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { brand, minPrice, maxPrice, fuelType, seatingCapacity, page = '1', limit = '10', sort, direction } = req.query;
  
  // Apply filters
  let filteredCars = [...cars];
  
  if (brand && brand !== 'All') {
    filteredCars = filteredCars.filter(car => car.brand === brand);
  }
  
  if (minPrice && !isNaN(Number(minPrice))) {
    filteredCars = filteredCars.filter(car => car.price >= Number(minPrice));
  }
  
  if (maxPrice && !isNaN(Number(maxPrice))) {
    filteredCars = filteredCars.filter(car => car.price <= Number(maxPrice));
  }
  
  if (fuelType && fuelType !== 'All') {
    filteredCars = filteredCars.filter(car => car.fuelType === fuelType);
  }
  
  if (seatingCapacity && !isNaN(Number(seatingCapacity))) {
    filteredCars = filteredCars.filter(car => car.seatingCapacity >= Number(seatingCapacity));
  }
  
  // Apply sorting
  if (sort && direction) {
    filteredCars.sort((a, b) => {
      const sortField = sort as keyof Car;
      if (direction === 'asc') {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });
  }
  
  // Apply pagination
  const pageNum = parseInt(page as string, 10);
  const limitNum = parseInt(limit as string, 10);
  const startIndex = (pageNum - 1) * limitNum;
  const endIndex = startIndex + limitNum;
  const paginatedCars = filteredCars.slice(startIndex, endIndex);
  
  res.status(200).json({ 
    cars: paginatedCars,
    total: filteredCars.length
  });
}