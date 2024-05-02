// moduls
import { useState } from "react";

// components
import { Button } from "../General_Components/Button";

// react icons
import { GoSun } from "react-icons/go";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { RiThreadsFill } from "react-icons/ri";
import Nav_bar from "../General_Components/Nav_bar";

  export default function Social_Networks () {

    const [active, setActive] = useState(false);

  return (
    <>
    <div className="SN">
      <div className="SN-content-1">
        <span className="SN-content-1__items--languages">Languages</span>
        <span className="SN-content-1__items--icon">
          <GoSun />
        </span>
      </div>

      <Button opneModal={()=>setActive(true)} />

      <Nav_bar active={active} closeModal={()=>{setActive(false)}}/>
    </div>
      <div className="block"></div>
      </>
  );
}