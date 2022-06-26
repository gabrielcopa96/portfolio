import React from "react";
import { ContainerResume, CardResume } from "./styles/ResumeStyles.jsx";
import imagenPerfil from "../../assets/images/perfil-portfolio2.jpg";
import styles from "./styles/resume.module.css";

const Resume = () => {
  return (
    <ContainerResume id="resume">
      <h1>Resumen</h1>
      <CardResume
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/004/497/410/non_2x/black-square-pattern-luxury-sofa-background-and-texture-vector.jpg')`,
        }}
      >
        <img
          src={imagenPerfil}
          alt="imagen-perfil"
          style={{
            width: "260px",
            height: "260px",
            border: "1px solid #5e5e5e45",
            borderRadius: ".33rem",
          }}
        />
        <div
          style={{
            color: "#e0e0e0",
            marginTop: "1.3rem",
            letterSpacing: ".8px",
          }}
        >
          <p>
            Hola! Soy Gabriel Copa encantado de conocerte,{" "}
            <span style={{ color: "var(--color-Principal)" }}>
              Full Stack Developer
            </span>
            , orientado al FrontEnd, ya que me gusta codificar cosas desde cero
            y disfruto dando vida a las ideas en el navegador. Actualmente soy
            egresado del bootcamp Soy Henry en el cual aprendi la mayoria de las
            tecnologias las cuales manejo. Soy una persona proactiva, me gusta
            estar aprendiendo constantemente y que mejor que en el mundo IT
            donde todos los dias se aprende algo nuevo.
          </p>
          <div style={{ marginTop: "1.1rem" }}>
            <a
              href={
                "http://localhost:3000/src/components/Resume/GABRIELCOPA.pdf" ||
                "https://gabrielcopa.vercel.app//src/components/Resume/GABRIELCOPA.pdf"
              }
              traget="_blank"
              download="cv-gabrielcopa"
              className={styles.btnDownload}
            >
              DESCARGAR CV
            </a>
          </div>
        </div>
      </CardResume>
    </ContainerResume>
  );
};

export default Resume;
