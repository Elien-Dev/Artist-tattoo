import picture_art from "../../../public/pictures/perfil-img.jpg";

export default function Perfil_art() {

  return (
    <div className="container">
      <picture className="content-img">
        <img src={picture_art} alt="" className="content-img__perfil" />
      </picture>

      <div className="content-art">
        <h2 className="content-art__name">Name</h2>
        <p className="content-art__description">Ocupacion</p>
      </div>
    </div>
  );
}
