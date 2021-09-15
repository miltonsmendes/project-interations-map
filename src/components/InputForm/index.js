import { useEffect, useRef, useState } from 'react';
import { useField } from "@unform/core";
import { Input} from "reactstrap";


export default function InputForm({ name, label, placeholder, ...rest }) {

  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName + label}>{label}</label>}

      <Input
        placeholder={placeholder}
        name={name}
        id={fieldName}
        innerRef={inputRef}
        defaultValue={defaultValue}
        type="text"
        {...rest}
      />
      {error && <strong className="text-danger">{error}</strong>}
    </>
  );
}
