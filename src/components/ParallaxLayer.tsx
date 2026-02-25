import { useParallax } from '../hooks/useParallax';

interface ParallaxLayerProps {
  speed: number;
  className?: string;
  children?: React.ReactNode;
  imageSrc?: string;
  zIndex?: number;
}

export const ParallaxLayer: React.FC<ParallaxLayerProps> = ({
  speed,
  className = '',
  children,
  imageSrc,
  zIndex = 0,
}) => {
  const { transform } = useParallax(speed);

  return (
    <div
      className={`absolute inset-0 gpu-accelerated ${className}`}
      style={{
        transform,
        zIndex,
      }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      {children}
    </div>
  );
};
