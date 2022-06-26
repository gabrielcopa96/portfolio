import React from "react";
import CardsProjects from "./CardsProjects.jsx";
import CardsProjectsPi from "./CardsProjectsPi.jsx";
import Parallax from "react-rellax";

const Projects = () => {
  return (
    <div
      style={{ position: "relative", marginBottom: "2rem", marginTop: "7rem" }}
      id="projects"
    >
      <h1
        style={{
          color: "var(--color-Principal)",
          textAlign: "center",
          paddingBottom: ".5rem",
        }}
      >
        Proyectos
      </h1>
      <div
        style={{
          width: "80%",
          margin: "1rem auto",
          display: "flex",
          flexDirection: "column",
          gap: "2.2rem",
        }}
      >
        <Parallax speed={0}>
          <CardsProjects
            image="https://res.cloudinary.com/salta/image/upload/v1655856251/fittnet_n9egzn.jpg"
            title="FittNet"
            github="https://github.com/gabrielcopa96/PF-FittNet-G11-v1.2"
            deploy="https://fittnet-g11.vercel.app/"
            description="Aplicación Web, consiste en brindar soporte e información a usuarios y a dueños de gimnasios sobre la administración de palnes, gestión de personal y seguimiento de entrenamientos, gimnasios y entrenadores disponibles, así como la gestion de nuevos usuarios y sus pagos mensuales"
          />
        </Parallax>
        <CardsProjects
          image="https://res.cloudinary.com/salta/image/upload/v1655856212/7devsnft.jpg"
          title="7DevsNFT"
          github="https://github.com/gabrielcopa96/Proyecto-Marketplace-NFT"
          deploy="https://7devsnft.netlify.app/"
          description="Aplicación Web, consiste en un Market de NFT. Los usuarios pueden registrarse y conectar una wallet de metamask, las compras solo se pueden hacer si tienes en tu navegador Metamask en el caso contrario la página no te va a dejar hacer ninguna compra ni crear un nft dentro de la pagina"
        />
        <CardsProjectsPi
          image="https://res.cloudinary.com/salta/image/upload/v1655856258/fastfoods_sg6ja6.jpg"
          title="FastRecipes"
          github="https://github.com/gabrielcopa96/fastRecipes-PIHENRY"
          deploy="https://fastrecipes-pihenry-production.up.railway.app/"
          description="una SPA sobre recetas saludables, se consume una api externa para visualizar recetas, aquellas que sean creadas por medio del formulario son almacenadas en la base de datos. Por cada receta tiene un detalle profundo sobre sus pasos a seguir, tiempo de cocción, puntaje y una breve descripción"
        />
      </div>
    </div>
  );
};

export default Projects;
