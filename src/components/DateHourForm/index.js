import React, { useRef, useState, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { useField } from "@unform/core";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from "date-fns/locale/pt-BR";

const DateHourForm = ({
  name,
  label,
  initialDateHour,
  ...rest
}) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue } = useField(name);
  const [date, setDate] = useState(defaultValue || initialDateHour);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: "props.selected",
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <>
      {label && <label>{label}</label>}
      <ReactDatePicker
        ref={datepickerRef}
        selected={date}
        onChange={setDate}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="d/MMMM/yyyy h:mm a"
        locale={ptBR}
        {...rest}
      />
    </>
  );
};
export default DateHourForm;