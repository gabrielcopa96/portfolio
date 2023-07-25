import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";
import { JSXElementConstructor, ReactElement } from "react";

export const Projects = (): ReactElement<JSXElementConstructor<HTMLElement>> => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

interface ProjectI {
  title: string;
  imgSrc: string;
  code: string;
  projectLink: string;
  tech: string[];
  description: string;
  modalContent: JSX.Element;
}

const projects: ProjectI[] = [
  {
    title: "Ontiime",
    imgSrc: "/project-imgs/ontiime.png",
    code: "https://www.github.com",
    projectLink: "https://app.ontiime.io/",
    tech: ["React", "Sass", "Auth0", "MongoDB", "NodeJS", "ExpressJS", "Ably", "AWS"],
    description:
      "Application for public accountants, where you can have a moratorium control of your clients.",
    modalContent: (
      <>
        <p>
          I worked as a junior developer and created reusable dynamic components.
        </p>
        <p>
          The front end technology is based on React JS with Sass.
          Application state management for the states that we consume from the api are cached using tanstack&apos;s reactquery technology.
        </p>
        <p>
          The back end made with NodeJS/ExpressJS and mongodb as a database.
        </p>
      </>
    ),
  },
  {
    title: "Natch",
    imgSrc: "/project-imgs/natch.png",
    code: "https://github.com/lecorreyann/natch-njc-app",
    projectLink: "https://natch-njc-app.vercel.app/",
    tech: ["React", "Tailwind", "MongoDB", "NodeJS", "ExpressJS", "Vercel"],
    description:
      "Application made for a digital marketing company. Its use is based on having a dashboard to create events, awards, etc.",
    modalContent: (
      <>
        <p>
          Worked as a junior developer for this web application. Integrated api&apos;s, Created dynamic and reusable components.
        </p>
        <p>
          I work primarily on the frontend, creating reusable components and inegrating api.
        </p>
        <p>
          The team in total consists of 2 developers. This is a passion project
          for all of us.
        </p>
      </>
    ),
  },
  {
    title: "FittNet",
    imgSrc: "/project-imgs/fittnet.png",
    code: "https://github.com/gabrielcopa96/PF-FittNet-G11-v1.2",
    projectLink: "https://fittnet-g11.vercel.app/",
    tech: ["React", "CSS", "MongoDB", "NodeJS", "ExpressJS"],
    description:
      "It is a web application that brings together all the services of a gym and plants it in a friendly environment, has 2 views, a view for gyms and a view for customers which is more like a virtual store.",
    modalContent: (
      <>
        <p>
          My first application made with a team of 8 people. This application helps gyms to offer all their services from 1 single place, and also to receive payments or monthly fees.
        </p>
        <p>
          The project was the most challenging at the beginning, but it was the one that gave me the biggest boost to my knowledge and professional expertise..
        </p>
      </>
    ),
  },
];
