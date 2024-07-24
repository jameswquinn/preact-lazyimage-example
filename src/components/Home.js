import { h } from 'preact';
import LazyImage from './LazyImage';
import { images } from '../data/images';
import './Home.css';

const Home = () => (
  <div>
    <h1>Preact LazyImage Example</h1>
    <div className="image-grid">
      {images.map((image, index) => (
        <LazyImage
          key={index}
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.sizes}
          alt={image.alt || `Image ${index + 1}`}
          placeholder={image.placeholder}
          width={image.width}
          height={image.height}
          className="lazy-image"
        />
      ))}
    </div>
  </div>
);

export default Home;
