import { MouseEventHandler } from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function Button({ text, className, onClick, type = "button", disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`px-7 py-3 min-w-52 md:px-9 md:py-4 bg-gray-700 shadow-lg font-medium md:font-semibold text-white text-md rounded-md disabled:opacity-30 hover:bg-cyan-600 hover:text-white transition ease-linear duration-200 ${
        className ? className : ""
      }`}
    >
      {text}
    </button>
  );
}
