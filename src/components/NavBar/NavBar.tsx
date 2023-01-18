import Logo from "../Atomic/Logo/Logo";
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
