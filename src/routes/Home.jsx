import Header from "../components/Home/Header";
import Target_inf from "../components/Home/Target_inf";
import Maker_tattoo from "../components/Home/Maker_tattoo";
import About_tattoo from "../components/Home/About_tattoo";
import img_background from "../../public/pictures/img carousel/img5.jpg";
import Footer_page from "../components/Home/Footer";
import Sliderimage from "./SliderImage";

// carousel

export default function Home() {
  return (
    <>
      <Header />
      <section className="section-1">
        <Target_inf />
        <Target_inf />
        <Target_inf />
      </section>

      <Sliderimage />

      <section className="section-2">
        <Maker_tattoo />
        <Maker_tattoo />
        <Maker_tattoo />
        <Maker_tattoo />
        <Maker_tattoo />
      </section>

      <section className="section-3">
        <div className="img-content">
          <img src={img_background} className="img-content__img" />
        </div>

        <div className="content-inf">
          <About_tattoo
            tittle_inf={"tittle"}
            content_inf={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus harum saepe fugiat sequi blanditiis repellendus vel! Voluptatibus eius ducimus suscipit expedita a deserunt, itaque fuga natus perferendis perspiciatis quo!"
            }
            link_inf={"Eliendev.com"}
          />
          <About_tattoo
            tittle_inf={"tittle"}
            content_inf={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus harum saepe fugiat sequi blanditiis repellendus vel! Voluptatibus eius ducimus suscipit expedita a deserunt, itaque fuga natus perferendis perspiciatis quo!"
            }
            link_inf={"Eliendev.com"}
          />
          <About_tattoo
            tittle_inf={"tittle"}
            content_inf={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto delectus harum saepe fugiat sequi blanditiis repellendus vel! Voluptatibus eius ducimus suscipit expedita a deserunt, itaque fuga natus perferendis perspiciatis quo!"
            }
            link_inf={"www.Eliendev.com"}
          />
        </div>
      </section>

      <Footer_page />
    </>
  );
}
