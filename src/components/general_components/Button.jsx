import { CiTextAlignRight } from "react-icons/ci";

const Button = ( {onModal} ) => {

    return (
      <button className="btn-main" onClick={onModal}>
        <CiTextAlignRight id={'btn'}/>
      </button>
    )
  }

export {Button}