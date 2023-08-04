import { useState, type JSXElementConstructor, type ReactElement } from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import styles from "./inputpassword.module.scss";

const InputPassword = (): ReactElement<JSXElementConstructor<HTMLElement>> => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <div className={styles.containerInputPassword}>
            <input
                type={!passwordVisible ? "password" : "text"}
                className={styles.inputpassword}
            />
            <div>
                {
                    passwordVisible
                        ? <AiFillEyeInvisible
                            className={styles.icon}
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                        : <AiFillEye
                            className={styles.icon}
                            onClick={() => setPasswordVisible(!passwordVisible)}
                        />
                }
            </div>
        </div>
    )
}

export default InputPassword;