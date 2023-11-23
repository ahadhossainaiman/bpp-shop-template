/* eslint-disable react/no-unknown-property */
import "./HeroSection.css";

// import 'swiper/css';
import sliderImgOne from '../../assets/slider-img-1.png';
import sliderImgTwo from '../../assets/slider-img-2.png';
import sliderImgThree from '../../assets/slider-img-3.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Slider from "react-slick";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section>
      <div className="hero_container">
        <div className="side-menu">
        <CategoryMenu/>
        </div>
      
        <div className="hero_slider">
      <Slider {...settings}>
          <div className="mySwiper_hero_section">
          <img src={sliderImgOne} />
          </div>
          <div className="mySwiper_hero_section">
          <img src={sliderImgTwo} />
          </div>
          <div className="mySwiper_hero_section">
          <img src={sliderImgThree} />
          </div>
         
        </Slider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
