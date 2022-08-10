import { ContainerResume, CardResume } from "./styles/ResumeStyles.jsx";
import imagenPerfil from "../../assets/images/perfil-portfolio2.jpg";
import cv from "./CV-2-GABRIEL-COPA.pdf";
import styles from "./styles/resume.module.css";

const Resume = ( { theme }) => {
  return (
    <ContainerResume id="resume">
      <h1>Acerca de mi</h1>
      <CardResume  style={theme === "dark" ? {} : {backgroundColor: "#353535"}}>
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
          <div style={{ marginTop: "2.2rem" }}>
            <a
              href={cv}
              traget="_blank"
              download
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
