import ImageGallery from "react-image-gallery";

export default function Sliderimage() {
  const images = [
    {
      original:"/public/pictures/img carousel/tattoo1.jpg",
      thumbnail: "/public/pictures/img carousel/tattoo1.jpg",
    },
    {
      original: "/public/pictures/img carousel/tattoo2.jpg",
      thumbnail: "/public/pictures/img carousel/tattoo2.jpg",
    },
    {
      original: "/public/pictures/img carousel/tatto3.jpg",
      thumbnail: "/public/pictures/img carousel/tatto3.jpg",
    },
    {
      original: "/public/pictures/img carousel/tattoo4.jpg",
      thumbnail: "/public/pictures/img carousel/tattoo4.jpg",
    },
  ];

  return (
    <div className="content-slider">
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        autoPlay={true}
      />
    </div>
  );
}
