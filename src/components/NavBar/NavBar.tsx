import Logo from "../Atomic/Logo/Logo";
import TitleHeader from "../Atomic/TitleHeader/TitleHeader";
import ListTags from "../Molecules/ListTags/ListTags";

const NavBar = () => {

  const tags = ["home", "about", "contact"]

  return (
    <nav className="navbar">
      <Logo />
      <ListTags tags={tags} />
    </nav>
  );
};

export default NavBar;
