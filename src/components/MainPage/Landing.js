import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Landing.css";
const Landing = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    pauseOnHover: false,

  };
  return (
    <div className="wrapper">
      <h1 className="heading">WILDBEATS</h1>
      <h1 className="subheading">The Cultural Club of IIIT Kottayam</h1>
    <div className="slider-contain">
      <Slider {...settings}>
        <div className="slide">
          <img src = {require("../../assets/Landing/im1.jpg")} alt=""/>
        </div>
        <div className="slide">
          <img src = {require("../../assets/Landing/im2.jpg")} alt=""/>
        </div>
        <div className="slide">
          <img src = {require("../../assets/Landing/im3.jpg")} alt=""/>
        </div>
        <div className="slide">
          <img src = {require("../../assets/Landing/im4.jpg")} alt=""/>
        </div>
        <div className="slide">
          <img src = {require("../../assets/Landing/im6.jpg")} alt=""/>
        </div>
        <div className="slide">
          <img src = {require("../../assets/Landing/im7.jpg")} alt=""/>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Landing;
