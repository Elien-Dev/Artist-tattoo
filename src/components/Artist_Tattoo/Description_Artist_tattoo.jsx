import img_Tatuador from "../../../public/pictures/tatuador_1.png";
import BGArtist from "../../../public/pictures/BGArtist-1.png"
import { FaInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiThreadsFill } from "react-icons/ri";
import { LiaFacebookSquare } from "react-icons/lia";

export default function Description_Artist_Tattoo() {
  return (
    <div className="description-artist">
      <h2 className="description-artist__name">Name Artist</h2>
      <div className="description-artist__avg">⭐⭐⭐⭐⭐</div>

      <picture className="description-artist__content-img">
        <img src={BGArtist} alt="" className="description-artist__content-img__Bgimg"/>
        <img
          src={img_Tatuador}
          className="description-artist__content-img__img"
          alt="Artist Tattoo"
          loading="lazy"
        />
      </picture>

      <div className="description-artist__datils">
        <p className="description-artist__datils__esp">Especialidad</p>
        <p className="description-artist__datils__about--artist">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
          soluta nisi enim laborum praesentium, in dicta cum? Rerum totam
          dolorem veniam ipsum consequuntur corrupti quis sapiente at?
          Veritatis, tenetur magni!
        </p>
      </div>

      <nav className="find-me-in">
        <li className="find-me-in__li">
          <a href="#" className="find-me-in__li--a">
            <FaInstagram />
          </a>
        </li>
        <li className="find-me-in__li">
          <a href="#" className="find-me-in__li--a">
            <IoLogoWhatsapp />
          </a>
        </li>
        <li className="find-me-in__li">
          <a href="#" className="find-me-in__li--a">
            <RiThreadsFill />
          </a>
        </li>
        <li className="find-me-in__li">
          <a href="#" className="find-me-in__li--a">
            <LiaFacebookSquare />
          </a>
        </li>
      </nav>
    </div>
  );
}
