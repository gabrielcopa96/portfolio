import React, { ChangeEvent, JSXElementConstructor, ReactElement } from 'react';
import { InputEmailI } from "@/pages/admin/components/InputEmail/interfaces/inputemail.interface";
import styles from "./inputemail.module.scss";
import { validateEmail } from './validation/inputEmail.validation';

const InputEmail = ({ value, onChange }: InputEmailI): ReactElement<JSXElementConstructor<HTMLElement>> => {

  function changeValueEmail(value: string) {

    onChange(value);

    if (!validateEmail(value)) {
      console.log("Email invalido");
    } else {
      console.log("Email valido");
    }

  }

  return (
    <input
      className={styles.inputEmail}
      type="email"
      placeholder="Escriba email..."
      value={value}
      onChange={(event: any) => changeValueEmail(event.target.value)}
    />
  )
}
export default InputEmail;