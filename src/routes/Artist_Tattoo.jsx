import Section_1 from "../components/Artist_Tattoo/Section_1";
import Social_Networks from "../components/Home/Social_Networks";
import Description_Artist_Tattoo from "../components/Artist_Tattoo/Description_Artist_tattoo";
import Footer from "../components/Home/Footer"

export default function Artist_Tattoo () {
  return(
    <>
      <Social_Networks />
      <Section_1 />
      <Description_Artist_Tattoo />
      {/* <Find_me_in /> */}
      <Footer />
    </>
  )
}