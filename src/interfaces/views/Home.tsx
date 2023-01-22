import DescriptionHero from "../../components/Atomic/DescriptionHero/DescriptionHero";
import TitleHeader from "../../components/Atomic/TitleHeader/TitleHeader";
import NavBar from "../../components/NavBar/NavBar"

const Home = () => {
  return (
    <header>
      <NavBar />
      <div className="container-hero">
        <TitleHeader text="Full Stack Developer" />
      </div>
      <div className="footer-hero">
        <DescriptionHero />
      </div>
    </header>
  )
}

export default Home;