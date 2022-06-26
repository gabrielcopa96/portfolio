import React from "react";
import {
  ContainerMainForm,
  FormularioMain,
  InputFormulario,
  TextAreaFormulario,
  HeaderFormulario,
  BtnEnviar
} from "./styles/FormStyle.jsx";

const Form = () => {
  return (
    <ContainerMainForm id="contacto">
      <h1
        style={{
          color: "var(--color-Principal)",
          textAlign: "center",
          margin: "1.5rem auto",
        }}
      >
        Contáctame
      </h1>
      <FormularioMain
        target="_blank"
        action="https://formsubmit.co/gabrielcncopa@gmail.com"
        method="POST"
      >
        <HeaderFormulario>
          <InputFormulario
            type="text"
            placeholder="nombre"
            name="nombre"
            required
          />
          <InputFormulario
            type="email"
            placeholder="email@mail.com"
            name="email"
            required
          />
        </HeaderFormulario>
        <TextAreaFormulario name="message" rows="5" placeholder="escriba su mensaje.." />
        <BtnEnviar type="submit">ENVIAR</BtnEnviar>
      </FormularioMain>
    </ContainerMainForm>
  );
};

export default Form;
