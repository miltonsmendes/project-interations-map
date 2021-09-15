import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import ReactSelect from "react-select";


export default function Select({ name, label, placeholder, typeValue, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <ReactSelect
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        placeholder={placeholder}
        {...rest}
      />
      {error && <div className="text-danger">{error}</div>}
    </>
  );
};