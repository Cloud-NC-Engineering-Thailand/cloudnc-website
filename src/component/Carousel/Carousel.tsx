import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import images from "../../Constant/CarouselImage";


const Carousel: React.FC = () => {
  
 
  return (
     <ImageGallery 
     items={images}
     showBullets={true}
     infinite={true}
     slideDuration={500}
     slideInterval={7000}
     showThumbnails={false}
     showPlayButton={false}
     lazyLoad={true}
     showNav={false}
     autoPlay={true}
     showFullscreenButton={false}
     />
  );
};

export default Carousel;
