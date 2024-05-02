export interface LabelProps {
  htmlFor?: string;
  label: string;
}

export function Label({ htmlFor, label }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
  );
}
