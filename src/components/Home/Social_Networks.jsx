// moduls
import { useState } from "react";

// components
import { Button } from "../general_components/Button";

// react icons
import { GoSun } from "react-icons/go";
import { PiInstagramLogoLight } from "react-icons/pi";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { RiThreadsFill } from "react-icons/ri";
import Nav_bar from "../general_components/Nav_bar";

  export default function Social_Networks () {

  const [activeBtnMain, setActiveBtnMain] = useState(false);

  function openModal() {
    setActiveBtnMain(true);
  }

  return (
    <>
    <div className="SN">
      <div className="SN-content-1">
        <span className="SN-content-1__items--languages">Languages</span>
        <span className="SN-content-1__items--icon">
          <GoSun />
        </span>
      </div>

      <Button onModal={openModal} />
      {/* <button onClick={()=>{setActiveBtnMain(true)}}>open modal</button> */}

      <Nav_bar isOpen={activeBtnMain} closeModal={() => setActiveBtnMain(false)} />
    </div>
      <div className="block"></div>
      </>
  );
}