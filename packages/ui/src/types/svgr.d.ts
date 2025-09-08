declare module "*.svg" {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  import { type StaticImageData } from "next/image";
  const content: string | StaticImageData;
  export default content;
}
