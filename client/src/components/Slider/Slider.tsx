import Sliders from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../../assets/img/slider/main02.jpg";
import img3 from "../../assets/img/slider/main03.jpg";
const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Sliders {...settings}>
        {[`${img2}`, `${img3}`].map((item, i) => (
          <div key={i}>
            <img src={item} alt="Ảnh ESMEEs" />
          </div>
        ))}
      </Sliders>
    </div>
  );
};

export default Slider;
