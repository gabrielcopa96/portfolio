import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import { Poppins } from "next/font/google";
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import InputText from './components/Input/InputText';
import Select from './components/Select/Select';
import SideBar from './components/SideBar/SideBar';
import styles from "./admin.module.scss";
import InputPassword from './components/InputPassword/InputPassword';

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

const Admin = () => {

    return (
        <main
            className={styles.admin}
        >
            <div>
                <p>InputPassword:</p>
                <InputPassword />
            </div>
            {/* <div>
                <br />
                <p>InputText:</p>
                <InputText placeholder="Nombre" />
            </div> */}
            {/* <SideBar />
            <div className={styles.prueba}>
                <h3>Hola</h3>
            </div> */}
        </main>
    )
}

export default Admin;