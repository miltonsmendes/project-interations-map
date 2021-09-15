import { Form } from "@unform/web";
import InputForm from "../InputForm";
import { Button } from "reactstrap";
import SelectForm from "../SelectForm";
import DateHourForm from "../DateHourForm";



export const documentDate = [
  {
    label: "Brasileira",
    value: "Brasileira",
  },
  {
    label: "Americano",
    value: "Americano",
  },
];


// const initialData = {
//   name: "Douglas Rodrigues",
//   telephonenumber: 85986401378,
//   email: "douglas@lapisco.ifce.edu.br",
// };

const EventFormular = () => {
  const handleSubmit = (data, { reset }) => {
    console.log(data);
    reset();
  };

  return (
      <Form /*initialData={initialData}*/ onSubmit={handleSubmit}>
          
          <DateHourForm name="datehour" label="Data e Hora de início:" />
          <DateHourForm name="datehour" label="Data e Hora de término:" />
          
          <SelectForm
            name={"documenttype"}
            options={documentDate}
            placeholder="Selecione"
            label="Nacionalidade:"
          />
          <InputForm name="name" label="Descrição:" />
          <InputForm name="name" label="Descrição:" />


          <Button type="submit">Enviar</Button>

      </Form>
  );
};

export default EventFormular;