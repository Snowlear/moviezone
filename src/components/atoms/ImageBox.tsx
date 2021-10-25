import imageBoxStyles from "./ImageBox.module.css";
import Image from "next/image";

export default function ImageBox({ url, styles, keyValue, alt, width, height }: ImageProps) {
  return (
    <Image
      src={url}
      alt={alt}
      key={keyValue}
      width={width}
      height={height}
      className={
        imageBoxStyles.img + (styles === undefined ? "" : " " + styles)
      }
    />
  );
}

interface ImageProps {
  width: number;
  height: number;
  url: string;
  styles?: string;
  keyValue?: string;
  alt?: string;
}
