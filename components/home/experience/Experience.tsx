import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

interface ExperienceItemI {
  title: string;
  position: string;
  time: string;
  location: string;
  description: string;
  tech: string[];
}

const experience: ExperienceItemI[] = [
  {
    title: "Ontiime",
    position: "Junior Full Stack Developer",
    time: "Oct 2022 - Jul 2023",
    location: "Remote, France Paris",
    description:
      "I helped from the beginning of the project, at the beginning I was doing back end and doing the corresponding deployment in aws, and then at the end of rest api I was part of the front end team..",
    tech: [
      "JavaScript",
      "ReactJS",
      "Rest API",
      "Git",
      "GitHub",
      "Typscript",
      "NodeJS/ExpressJS",
      "Ably/Socket.io",
      "Mongo",
      "AWS"
    ],
  },
  {
    title: "ACTotal",
    position: "Mid Full Stack Developer",
    time: "Oct 2023 - Actual",
    location: "Remote, Uruguay Montevideo",
    description:
      "I helped from the beginning of the project, at the beginning I was doing back end and doing the corresponding deployment in aws, and then at the end of rest api I was part of the front end team..",
    tech: [
      "JavaScript",
      "ReactJS",
      "Rest API",
      "Graphql",
      "Git",
      "GitHub",
      "Typscript",
      "NodeJS/ExpressJS",
      "Ably/Socket.io",
      "Stripe",
      "Postgres",
      "Sequelize",
      "PHP",
      "Wordpress",
      "Mongo",
      "AWS"
    ],
  }
];
