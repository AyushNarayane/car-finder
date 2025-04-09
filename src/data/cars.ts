import { Car } from '../types';

export const cars: Car[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2023,
    price: 25000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 30,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RhJTIwY2Ftcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Toyota Camry is a reliable and fuel-efficient sedan with modern features and comfortable seating for five passengers.'
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2023,
    price: 22000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 32,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9uZGElMjBjaXZpY3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Honda Civic offers excellent fuel economy, a spacious interior, and advanced safety features in a compact package.'
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'F-150',
    year: 2023,
    price: 35000,
    fuelType: 'Gasoline',
    seatingCapacity: 6,
    mileage: 20,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1583267746897-2cf415887172?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZCUyMGYlMjAxNTB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Ford F-150 is a powerful and versatile pickup truck with impressive towing capacity and advanced technology features.'
  },
  {
    id: 4,
    brand: 'Chevrolet',
    model: 'Equinox',
    year: 2023,
    price: 28000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 26,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hldnJvbGV0JTIwZXF1aW5veHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Chevrolet Equinox is a compact SUV with a comfortable ride, spacious interior, and good fuel efficiency.'
  },
  {
    id: 5,
    brand: 'Tesla',
    model: 'Model 3',
    year: 2023,
    price: 45000,
    fuelType: 'Electric',
    seatingCapacity: 5,
    mileage: 0,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBtb2RlbCUyMDN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Tesla Model 3 is an all-electric sedan with impressive range, cutting-edge technology, and high performance.'
  },
  {
    id: 6,
    brand: 'BMW',
    model: '3 Series',
    year: 2023,
    price: 42000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 28,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym13JTIwMyUyMHNlcmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The BMW 3 Series combines luxury, performance, and technology in a sporty sedan package with excellent handling.'
  },
  {
    id: 7,
    brand: 'Audi',
    model: 'Q5',
    year: 2023,
    price: 48000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 25,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1614377284368-a6d4f911edc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXVkaSUyMHE1fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    description: 'The Audi Q5 is a luxury compact SUV with a refined interior, smooth ride, and advanced technology features.'
  },
  {
    id: 8,
    brand: 'Mercedes-Benz',
    model: 'E-Class',
    year: 2023,
    price: 55000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 26,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBlJTIwY2xhc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Mercedes-Benz E-Class is a luxury sedan with elegant styling, premium materials, and cutting-edge safety features.'
  },
  {
    id: 9,
    brand: 'Hyundai',
    model: 'Tucson',
    year: 2023,
    price: 26000,
    fuelType: 'Hybrid',
    seatingCapacity: 5,
    mileage: 38,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1634622583565-1f313ed861d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHl1bmRhaSUyMHR1Y3NvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Hyundai Tucson Hybrid offers excellent fuel efficiency, a comfortable ride, and a spacious interior with modern features.'
  },
  {
    id: 10,
    brand: 'Kia',
    model: 'Telluride',
    year: 2023,
    price: 33000,
    fuelType: 'Gasoline',
    seatingCapacity: 8,
    mileage: 24,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1635769444738-8a763c25fb39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lhJTIwdGVsbHVyaWRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    description: 'The Kia Telluride is a midsize SUV with three rows of seating, upscale features, and a comfortable, spacious interior.'
  },
  {
    id: 11,
    brand: 'Subaru',
    model: 'Outback',
    year: 2023,
    price: 28000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 29,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1626443252331-4b9beb9c1dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3ViYXJ1JTIwb3V0YmFja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Subaru Outback is a versatile wagon with standard all-wheel drive, rugged capability, and a comfortable interior.'
  },
  {
    id: 12,
    brand: 'Mazda',
    model: 'CX-5',
    year: 2023,
    price: 27000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 28,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1626443254335-d2d86e0b1b5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF6ZGElMjBjeCUyMDV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Mazda CX-5 is a compact SUV with upscale styling, engaging handling, and a premium interior with quality materials.'
  },
  {
    id: 13,
    brand: 'Volkswagen',
    model: 'Tiguan',
    year: 2023,
    price: 27000,
    fuelType: 'Gasoline',
    seatingCapacity: 7,
    mileage: 26,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1589750602846-60028879da9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dm9sa3N3YWdlbiUyMHRpZ3VhbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Volkswagen Tiguan offers optional third-row seating, a comfortable ride, and a user-friendly infotainment system.'
  },
  {
    id: 14,
    brand: 'Lexus',
    model: 'RX',
    year: 2023,
    price: 48000,
    fuelType: 'Hybrid',
    seatingCapacity: 5,
    mileage: 31,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1677553953810-dd89d03c0f77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV4dXMlMjByeHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Lexus RX Hybrid combines luxury and efficiency with a comfortable interior, smooth ride, and advanced safety features.'
  },
  {
    id: 15,
    brand: 'Jeep',
    model: 'Grand Cherokee',
    year: 2023,
    price: 38000,
    fuelType: 'Gasoline',
    seatingCapacity: 5,
    mileage: 22,
    transmission: 'Automatic',
    imageUrl: 'https://images.unsplash.com/photo-1626443254293-1b9d7d4fed7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVlcCUyMGdyYW5kJTIwY2hlcm9rZWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    description: 'The Jeep Grand Cherokee offers impressive off-road capability, a comfortable interior, and advanced technology features.'
  }
];

export const brands = [...new Set(cars.map(car => car.brand))];
export const fuelTypes = [...new Set(cars.map(car => car.fuelType))];
export const seatingCapacities = [...new Set(cars.map(car => car.seatingCapacity))];

export const priceRanges = [
  { min: 0, max: 25000, label: 'Under $25,000' },
  { min: 25000, max: 35000, label: '$25,000 - $35,000' },
  { min: 35000, max: 50000, label: '$35,000 - $50,000' },
  { min: 50000, max: 1000000, label: 'Over $50,000' },
];