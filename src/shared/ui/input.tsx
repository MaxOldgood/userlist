import { Label, LabelProps } from "./label";
import { TextInput, TextInputProps } from "./textInput";

interface InputProps extends TextInputProps, LabelProps {
  error?: string | boolean;
  touched?: boolean;
}

export function Input({ label, placeholder, value, type, onChange, onBlur, id, error, touched }: InputProps) {
  return (
    <div className="w-full">
      <Label htmlFor={id} label={label} />
      <TextInput
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
        error={error}
        touched={touched}
      />
      {error && touched && (
        <p className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{error}</p>
      )}
    </div>
  );
}
