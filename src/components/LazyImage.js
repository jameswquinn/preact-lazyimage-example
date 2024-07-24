import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import './LazyImage.css';

const LazyImage = ({ src, srcSet, sizes, placeholder, alt, width, height, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
    } else {
      setIsVisible(true);
    }

    return () => {
      if (observer && imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  const handleImageLoad = () => setIsLoading(false);
  const handleImageError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div
      ref={imageRef}
      style={{ width, height, position: 'relative' }}
      className={className}
    >
      {isLoading && <div className="spinner" role="status" aria-label="Loading image"></div>}
      {isVisible ? (
        <img
          src={hasError ? placeholder : src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{ display: isLoading ? 'none' : 'block' }}
          loading="lazy"
        />
      ) : (
        <img
          src={placeholder}
          alt={alt}
          width={width}
          height={height}
          style={{ filter: 'blur(10px)' }}
        />
      )}
    </div>
  );
};

export default LazyImage;
