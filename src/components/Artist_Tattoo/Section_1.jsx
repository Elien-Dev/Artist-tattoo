import Perfil_art from "./Perfil_art";
import Live from "../General_Components/Live"

export default function Section_1() {
  return (
    <section className="section-art">
      <Live></Live>
      <div className="perfil-art">
        <Perfil_art />
        <Perfil_art />
        <Perfil_art />
        <Perfil_art />
        <Perfil_art />
      </div>
    </section>
  );
}