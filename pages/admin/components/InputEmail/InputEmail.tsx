import React, { JSXElementConstructor, ReactElement } from 'react';
import styles from "./inputemail.module.scss";

const InputEmail = (): ReactElement<JSXElementConstructor<HTMLElement>> => {

  return (
    <input
      className={styles.inputEmail}
      type="email"
      placeholder="Escriba email..."
    />
  )
}

export default InputEmail;