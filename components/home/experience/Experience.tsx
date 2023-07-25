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

const experience = [
  {
    title: "Ontiime",
    position: "Mid-Level Full Stack Developer",
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
];
