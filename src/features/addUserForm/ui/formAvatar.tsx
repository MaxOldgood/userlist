import { MouseEventHandler } from "react";

interface FormAvatarProps {
  avatar: string;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export function FormAvatar({ avatar, onClick }: FormAvatarProps) {
  return (
    <div
      className="relative cursor-pointer flex-shrink-0 select-none w-32 h-32 aspect-square flex text-center items-center justify-center rounded-full overflow-hidden bg-gray-300"
      onClick={onClick}
    >
      <img
        className="w-full h-full object-cover flex-shrink-0"
        src={avatar}
        alt="avatar"
        loading="lazy"
      />
      <div className="absolute w-full h-full top-0 left-0 transition text-transparent bg-cyan-800 bg-opacity-0 hover:bg-opacity-60 hover:text-white aspect-square rounded-full flex justify-center items-center font-medium">
        Изменить аватар
      </div>
    </div>
  );
}
