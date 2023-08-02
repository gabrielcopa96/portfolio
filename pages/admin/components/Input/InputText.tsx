import { type ReactElement } from 'react';
import type { InputI } from './interface/input.interface';
import styles from "./input.module.scss";

const InputText = (props: InputI): ReactElement => {

    const { placeholder, type = "text" } = props;

    return (
        <input
            className={styles.input}
            placeholder={placeholder}
            type={type}
        />
    )
}

export default InputText;