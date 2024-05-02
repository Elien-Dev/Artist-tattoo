import { CiTextAlignRight } from "react-icons/ci";

const Button = ( {opneModal} ) => {
  return (
    <button onClick={opneModal} className="btn-main" >
      <CiTextAlignRight id={"btn"}/>
    </button>
  );
};

export { Button };
