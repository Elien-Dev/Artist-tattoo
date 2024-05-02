import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";

export default function Nav_bar( {active, closeModal} ) {
  // if(!isOpen) return false
  return (

    <div className={active ? 'modal__on' : 'main'}>
      <TfiClose className="main__btn-close" onClick={closeModal}/>
      <nav>
        <ul className="main__nav">
          <li className="main__nav--li">
            <Link className="main__nav--link" to={"/"}> 
              Inicio
            </Link>
          </li>
          <li className="main__nav--li">
            <Link className="main__nav--link" to={"/artist-tattoo"}>
              Artist Tattoo
            </Link>
          </li>
          <li className="main__nav--li">
            <Link className="main__nav--link" to={"/services"}>
              Servicios
            </Link>
          </li>
          <li className="main__nav--li">
            <Link className="main__nav--link" to={"/gallery-tattoo"}>
              Galeria de Tatujes
            </Link>
          </li>
          <li>
            <Link className="main__nav--link" to={"/about us"}>
              About us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
