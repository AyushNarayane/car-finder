# Car Finder

A Next.js application for finding and managing car listings with features like search, filtering, and wishlist functionality.

## Features

- Car search and filtering
- Detailed car information display
- Wishlist management
- Responsive design
- Image optimization with Next.js

## Prerequisites

- Node.js 18.x or later
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd car-finder
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
  ├── components/     # React components
  ├── data/          # Static data and constants
  ├── pages/         # Next.js pages
  ├── styles/        # CSS styles
  ├── types/         # TypeScript type definitions
  └── utils/         # Utility functions
```

## Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm start` - Runs the built application
- `npm run lint` - Runs ESLint for code linting

## Environment Configuration

The application uses Next.js configuration for image optimization. The following domains are configured for image loading:

```javascript
images: {
  domains: ['images.unsplash.com']
}
```

## Deployment

The application can be easily deployed on [Vercel](https://vercel.com), the platform from the creators of Next.js:

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import your repository on Vercel
3. Let Vercel handle the deployment automatically

For more deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn-pages-router) - interactive Next.js tutorial

## License

This project is licensed under the MIT License - see the LICENSE file for details.
