import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          {/* <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              ¡Hola! Mi nombre es Gabriel Copa y soy un técnico analista de sistemas con más de 1 año de experiencia trabajando como desarrollador web Full Stack
              <br /><br />
              Durante mi trayectoria, he participado en diversos proyectos donde he tenido la oportunidad de utilizar una amplia variedad de tecnologías.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              En la actualidad, me encuentro enfocado en ampliar mis habilidades en el desarrollo backend. Para ello, estoy estudiando Python con Django y Java. Aunque tengo experiencia con Node.js y Express.js, creo firmemente en la importancia de conocer diferentes tecnologías para poder tomar decisiones informadas y ofrecer las mejores soluciones para cada proyecto.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Me destaco por mi naturaleza autodidacta, ya que gran parte de mi aprendizaje se ha basado en la práctica diaria y en la lectura de documentación oficial de las tecnologías que utilizo.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Estoy emocionado por seguir creciendo como profesional y enfrentar nuevos desafíos. Siempre estoy abierto a colaborar en proyectos interesantes y desafiantes. ¡Gracias por visitar mi portfolio y conocer un poco más sobre mí!
              🔗
            </p>
          </Reveal> */}
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! My name is Gabriel Copa and I am a technical systems analyst with more than 1 year of experience working as a Full Stack web developer.
              <br /><br />
              During my career, I have participated in several projects where I have had the opportunity to use a wide variety of technologies.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Currently, I am focused on expanding my skills in backend development. To do so, I am studying Python with Django and Java. Although I have experience with Node.js and Express.js, I strongly believe in the importance of knowing different technologies to be able to make informed decisions and offer the best solutions for each project.</p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I stand out for my self-taught nature, as much of my learning has been based on daily practice and reading official documentation of the technologies I use.</p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I'm excited to keep growing as a professional and face new challenges. I'm always open to collaborate in interesting and challenging projects, thanks for visiting my portfolio and get to know a little more about me!🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
