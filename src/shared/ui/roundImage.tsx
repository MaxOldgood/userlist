import { MouseEventHandler } from "react";

interface GalleryImageProps {
  image: string;
  onClick?: MouseEventHandler;
}

export function RoundImage({ image, onClick }: GalleryImageProps) {
  return (
    <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 place-self-center flex  cursor-pointer justify-center items-center rounded-full flex-shrink-0 overflow-hidden bg-gray-300">
      <img onClick={onClick} src={image} alt="avatar" loading="lazy" className="w-full h-full object-cover" />
    </div>
  );
}
