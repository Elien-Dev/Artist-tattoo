import artist from '../../../public/pictures/artist.jpg'

export default function Maker_tattoo() {
  return(
    <>
      <picture className='maker-tattoo'>
        <img className='maker-tattoo__img' src={artist} alt="Artista Tatuador" />
        <div className='maker-tattoo__hover'></div>
      </picture>
    </>
  )
}