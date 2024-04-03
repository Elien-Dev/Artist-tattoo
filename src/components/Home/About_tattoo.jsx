export default function About_tattoo ( {tittle_inf, content_inf, link_inf } ) {
  return(
    <div className="inf">
      <h2 className="inf__about-tattoo" >{tittle_inf}</h2>
      <p className="inf__paragraph">{content_inf}</p>
      <a href={'www.google.com'} className="inf__link">
      www.google.com
      </a>
    </div>
  )
}