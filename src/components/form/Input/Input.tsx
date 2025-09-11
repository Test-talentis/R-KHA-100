import React, { memo } from "react";
import { Form } from "react-bootstrap";
import { Path, FieldValues, UseFormRegister } from "react-hook-form";

 type TIpnutProps<TFieldValues extends FieldValues> = {
  label: string;
  type: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  formText?: string;
  success?: string;
  notSuccess?: string;
  disabled?: boolean;
};

const Input =<TFieldValues extends FieldValues>({
  label,
  type,
  name,
  register,
  onBlur,
  error,
  formText,
  success,
  disabled,
}: TIpnutProps<TFieldValues>) => {
    const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
        if(onBlur) {
                onBlur(e);
                register(name).onBlur(e);
        } else {
            register(name).onBlur(e);
        
        }
    }
  
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control 
      type={type} 
      {...register(name)} 
      name={name}
      onBlur={onBlurHandler}
      isInvalid={error ? true : false}
      isValid={success ? true : false}
      disabled= {disabled} 
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {formText && <Form.Text muted>{formText}</Form.Text>}
    </Form.Group>
  );
};

export default Input;
