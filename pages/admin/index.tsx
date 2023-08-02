import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { Poppins } from "next/font/google";
import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import InputText from './components/Input/InputText';

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

const Admin = () => (
    <main id="root" className={poppins.className}>
        <section
            id="section-btn"
            style={{
                width: "10%"
            }}
        >
            <p>Button: </p>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}>
                <Button onClick={() => { console.log("estoy haciendo click en mi boton primary") }}>Primary</Button>
                <Button type="success" onClick={() => { console.log("estoy haciendo click en mi boton success") }}>Success</Button>
                <Button type="warning" onClick={() => { console.log("estoy haciendo click en mi boton warning") }}>Warning</Button>
                <Button type="danger" onClick={() => { console.log("estoy haciendo click en mi boton danger") }}>Danger</Button>
                <Button type="info" onClick={() => { console.log("estoy haciendo click en mi boton info") }}>Info</Button>
            </div>
        </section>

        <section
            id="section-input"
            style={{
                width: "15%"
            }}
        >
            <br />
            <p>InputText: </p>
            <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
            }}>
                <InputText placeholder='Escriba algo aqui:' />
            </div>
        </section>

        <section
            id="section-select"
            style={{
                width: "15%"
            }}
        >
            <br />
            <p>Select: </p>
        </section>
    </main>
)

export default Admin;