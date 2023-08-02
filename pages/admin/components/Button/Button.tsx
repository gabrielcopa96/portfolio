import { type JSXElementConstructor, type ReactElement } from 'react';
import styles from "./button.module.scss";
import type { ButtonI } from './interface/button.interface';

const Button = (props: ButtonI): ReactElement<JSXElementConstructor<HTMLElement>> => {

    const { children, onClick, type = "primary", disabled = false } = props;

    const typeClass = () => {
        switch (type) {
            case "primary":
                return styles.primary;
            case "secondary":
                return styles.secondary;
            case "danger":
                return styles.danger;
            case "info":
                return styles.info;
            case "success":
                return styles.success;
            case "warning":
                return styles.warning;
            default:
                return styles.primary;
        }
    }

    console.log(typeClass())

    return (
        <button
            className={`${styles.btn} ${typeClass()}`}
            onClick={onClick}
            disabled={disabled}
        >
            {
                children
            }
        </button>
    )
}

export default Button;