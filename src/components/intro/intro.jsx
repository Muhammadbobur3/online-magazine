import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SliderImage1 from "../../assets/images/sale.jpeg";
import SliderImage2 from "../../assets/images/sale2.jpeg";
import SliderImage3 from "../../assets/images/sale3.jpeg";
import SliderImage4 from "../../assets/images/sale.jpg";

const Intro = () => {
  const slides = [
    {
      image: SliderImage1,
    },
    {
      image: SliderImage2,
    },
    {
      image: SliderImage3,
    },
    {
      image: SliderImage4,
    },
  ];

  const settings = {
    infinite: true,
    speed: 600,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto px-6 pt-32 rounded-xl">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-[200px] md:h-[400px] object-cover rounded-xl"
            />
            <div className="text-center">
              <h2 className="text-3xl font-bold">{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Intro;
