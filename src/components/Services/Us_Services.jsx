import Img_Services from '../../../public/pictures/img-comming.png'

export default function Us_Services() {
  return (
    <section className='sec-services'>
      <h2 className='sec-services__title'>Tenemos para tus gustos!</h2>
      <div className='services'>
        <picture className='services__content'>
          <img src={Img_Services} alt="" className='services__content--img'/>
        </picture>

        <p className='services__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam quasi . Voluptates beatae quam ratione deleniti ducimus!</p>
      </div>

      <div className='services'>
        <picture className='services__content'>
          <img src={Img_Services} alt="" className='services__content--img'/>
        </picture>

        <p className='services__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, numquam quasi . Voluptates beatae quam ratione deleniti ducimus!</p>
      </div>

    </section>
  );
}
