# Preact LazyImage Example

This is an example of a Preact application that uses a `LazyImage` component to lazily load images with a loading spinner and responsive image support.

## Features

- Lazy loading of images using the IntersectionObserver API
- Fallback to eager loading for browsers that don't support IntersectionObserver
- Responsive images with `srcSet` and `sizes`
- Loading spinner while the image is loading
- Error handling for broken images
- Accessibility improvements
- Webpack configuration for development and production
- Jest setup for testing

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/preact-lazyimage-example.git
   cd preact-lazyimage-example
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Application

To start the development server:
```sh
npm start
```
The application will be available at `http://localhost:8080`.

### Building for Production

To create a production build:
```sh
npm run build
```
The output will be in the `dist` directory.

### Running Tests

To run the tests:
```sh
npm test
```

To run the tests in watch mode:
```sh
npm run test:watch
```

## Project Structure

```
src
├── components
│   ├── App.js
│   ├── ErrorBoundary.js
│   ├── Home.js
│   ├── LazyImage.js
│   ├── LazyImage.css
│   └── Home.css
├── data
│   └── images.js
├── index.js
└── index.html
```

## Customization

### Adding More Images

To add more images, update the `images` array in `src/data/images.js`:

```javascript
export const images = [
  {
    src: 'https://example.com/image1.jpg',
    srcSet: 'https://example.com/image1-400.jpg 400w, https://example.com/image1-800.jpg 800w',
    sizes: '(max-width: 600px) 100vw, 600px',
    alt: 'Description of image 1',
    placeholder: 'https://example.com/image1-placeholder.jpg',
    width: '800',
    height: '600',
  },
  // Add more image objects here
];
```

### Modifying Styles

To modify the styles, update the corresponding CSS files:

- `LazyImage.css`: Styles for the `LazyImage` component
- `Home.css`: Styles for the `Home` component

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- [Preact](https://preactjs.com/)
- [Webpack](https://webpack.js.org/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)
