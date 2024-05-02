import { MouseEventHandler } from "react";
import { RoundImage } from "../../shared/ui";

interface GalleryProps {
  onClick: MouseEventHandler;
  defaultAvatar: string;
  images: string[] | undefined;
}

export function Gallery(props: GalleryProps) {
  const { onClick, images } = props;

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full  bg-transparent  backdrop-blur-sm flex justify-center items-center">
        <div className="fixed h-full max-sm:h-full transform flex flex-col py-2 pb-5 px-5  overflow-y-auto scroll-smooth justify-start items-center overflow-hidden rounded-lg bg-white text-left shadow-lg transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <p className="w-full h-fit text-2xl text-center py-3 uppercase font-semibold">
            Выберите аватар
          </p>
          <div className="w-full grid grid-cols-3 max-sm:grid-cols-2 gap-5 justify-start items-start place-items-start">
            <RoundImage
              onClick={onClick}
              image={
                "https://api.dicebear.com/8.x/bottts-neutral/svg?seed=Sophie"
              }
            />
            {images?.map((image, index) => {
              return <RoundImage key={index} onClick={onClick} image={image} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
