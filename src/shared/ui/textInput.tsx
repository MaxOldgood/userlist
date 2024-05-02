import { ChangeEvent, FocusEvent } from "react";

export interface TextInputProps {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  onBlur: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string | boolean;
  touched?: boolean;
}

export function TextInput({ id, placeholder, value, onChange, type = "text", onBlur, error, touched }: TextInputProps) {
  return (
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
      onBlur={onBlur}
      className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
        error && touched ? "border-red-500" : ""
      }`}
    />
  );
}
