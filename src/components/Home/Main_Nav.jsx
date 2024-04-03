import logo from "../../../public/pictures/Logo.webp";

export default function Main_Nav() {
  return (
    <nav className="nav">
      <ul className="nav-content">
        <li className="nav-content__li">
          <img className="nav-content__li--img" src={logo} alt="Logo" />
        </li>
      </ul>
    </nav>
  );
}
