import { useEffect, useRef } from "react";
import "./Slider.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Image {
  img: string;
}
const Banner1 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589820/training/slider_pzswam.webp";
const Banner2 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589820/training/slider2_kmf0cg.webp";
const Banner3 = "https://res.cloudinary.com/dzz6rgxkl/image/upload/v1686589822/training/slider3_zmlenc.webp";

const images: Image[] = [
  {
    img: Banner1,
  },
  {
    img: Banner2,
  },
  {
    img: Banner3,
  },
  
];



const Slider: React.FC = () => {
  const slider = useRef<HTMLDivElement | null>(null);
  const isDown = useRef<boolean>(false);
  const startX = useRef<number | null>(null);
  const scrollLeft = useRef<number | null>(null);

  useEffect(() => {
    if (slider.current) {
      const sliderRef = slider.current;
      sliderRef.addEventListener("mousedown", handleMouseDown);
      sliderRef.addEventListener("mouseleave", handleMouseLeave);
      sliderRef.addEventListener("mouseup", handleMouseUp);
      sliderRef.addEventListener("mousemove", handleMouseMove);

      return () => {
        sliderRef.removeEventListener("mousedown", handleMouseDown);
        sliderRef.removeEventListener("mouseleave", handleMouseLeave);
        sliderRef.removeEventListener("mouseup", handleMouseUp);
        sliderRef.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

    const handleMouseDown = (e: MouseEvent) => {
      isDown.current = true;
      startX.current = e.pageX - (slider.current?.offsetLeft || 0);
      scrollLeft.current = slider.current?.scrollLeft || 0;
    };
    
    const handleMouseLeave = () => {
      isDown.current = false;
    };
    
    const handleMouseUp = () => {
      isDown.current = false;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
        if (!isDown.current) return;
            e.preventDefault();
            if (slider.current) {

            const x = e.pageX - (slider.current?.offsetLeft || 0);
            const walk = x - (startX.current || 0);
              slider.current.scrollLeft = (scrollLeft.current || 0) - walk;
        }
  };

  return (
    <div className="items" ref={slider}>
            {images.map((item, i) => (
            <div className="w-[200vw] md:w-[120vw] lg:w-[100vw] h-auto min-h-[18.75rem]" key={i} ref={slider}>
              <LazyLoadImage
                    loading='lazy'
                className="w-full h-full "
                src={item.img}
                alt={`Slider Image ${i}`}
              />
            </div>
          ))}         
    </div>  
  );
};

/* 
<div className="slider-wrap bg-white">
      <div className="slider overflow-hidden">
        <div className="slider-inner" >
          {images.map((item, i) => (
            <div className="item" key={i} ref={slider}>
              <img
                        loading="lazy"
                className="w-full h-full object-contain"
                src={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
*/

export default Slider;
