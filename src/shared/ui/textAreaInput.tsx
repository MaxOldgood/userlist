import { ChangeEvent, FocusEvent } from "react";

interface TextareaInputProps {
  id: string;
  label: string;
  htmlFor?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (event: FocusEvent<HTMLTextAreaElement>) => void;
}

export function TextareaInput({ id, label, value, onChange, onBlur }: TextareaInputProps) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}
