import { CiLocationOn } from "react-icons/ci";
import logo from '../../../public/pictures/Logo.webp'

export default function Footer_page() {
  return(
    <footer className="footer">
      <div className="footer-content">
        <picture className="footer-content__box">
          <img className="footer-content__box--img" src={logo} alt="" />
        </picture>

        <div className="content">
          <h2 className="content-title">
            Estudio Tattoo
          </h2>
        </div>
      </div>

      <ul className="list" >
        <li className="list__li"> <CiLocationOn style={{'fontSize':'30px'}} /> <p className="list__li--p" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam cupiditate unde perspiciatis officia sunt</p> </li>
        <li className="list__li"> <CiLocationOn style={{'fontSize':'18px'}} /> <p className="list__li--p" >0424 000 00 00</p> </li>
        <li className="list__li"> <CiLocationOn style={{'fontSize':'18px'}} /> <p className="list__li--p" >Terminos</p> </li>
        <li className="list__li"> <CiLocationOn style={{'fontSize':'18px'}} /> <p className="list__li--p" >tatuaje@gmail.com</p> </li>
      </ul>
    </footer>
  )
}