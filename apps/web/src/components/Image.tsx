import NextImage, { ImageProps as NextImageProps } from "next/image";

type ImageProps = NextImageProps;

export const Image: React.FC<ImageProps> = (props) => {
  return <NextImage {...props} />;
};
