import NextImage, { ImageProps } from 'next/image';

interface CustomImageProps extends Omit<ImageProps, 'alt'> {
  alt?: string;
}

export function Image({
  src,
  alt = '',
  width = 800,
  height = 600,
  className = '',
  ...props
}: CustomImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} w-full h-auto`}
      {...props}
    />
  );
}
