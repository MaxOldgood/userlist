import { ChangeEvent } from "react";
import { useFormik } from "formik";

import { TEXT_INPUT_FIELDS } from "../model/textInputFields";
import { basicSchema } from "../model/schemas";
import { Button, Input, TextareaInput } from "../../../shared/ui";

export interface FormValues {
  lastName: string;
  firstName: string;
  secondName: string;
  email: string;
  about: string;
  [key: string]: string;
}

interface UserFormProps {
  handleClose: () => void;
  onSubmit: (values: FormValues) => void;
  emailIsTaken: string | boolean;
  initialValues?: Partial<FormValues>;
  clearTakenEmailError: () => void;
}

export function UserForm({
  handleClose,
  onSubmit,
  emailIsTaken,
  initialValues,
  clearTakenEmailError,
}: UserFormProps) {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik<FormValues>({
      initialValues: {
        lastName: "",
        firstName: "",
        secondName: "",
        email: "",
        about: "",
        ...initialValues,
      },
      validationSchema: basicSchema,
      onSubmit: (values) => {
        onSubmit(values);
      },
    });

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChange(event);
    if (event.target.id === "email") clearTakenEmailError();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-xs lg:max-w-fit md:max-w-fit sm:max-w-fit flex-col justify-center items-center gap-2 p-5"
    >
      {TEXT_INPUT_FIELDS.map((field) => (
        <Input
          key={field.id}
          id={field.id}
          label={field.label}
          placeholder={field.placeholder}
          value={values[field.id]}
          onChange={handleInputChange}
          onBlur={handleBlur}
          error={errors[field.id] || (field.id === "email" && emailIsTaken)}
          touched={touched[field.id]}
        />
      ))}
      <TextareaInput
        id="about"
        label="О себе"
        value={values.about}
        onChange={handleInputChange}
        onBlur={handleBlur}
      />
      <div className="flex gap-1 pt-3 sm:flex-row flex-col">
        <Button
          type="submit"
          text={`${initialValues ? "редактировать" : "добавить"}`}
        />
        <Button
          onClick={handleClose}
          text="отмена"
          className={" hover:bg-orange-600 "}
        />
      </div>
    </form>
  );
}
