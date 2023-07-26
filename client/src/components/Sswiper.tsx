// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import classNames from "classnames/bind";
import styles from "../sass/modules/Swiper.module.scss";
import { swiper } from "../Mock";

const Sswiper = () => {
  const cx = classNames.bind(styles);

  return (
    <div className="elementor-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {swiper.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className={cx("swiper-content")}>
                <p className={cx("swiper-icon")}></p>
                <span className={cx("swiper-subtitle")}>{item.subtitle}</span>
                <h2 className={cx("swiper-title")}>{item.name}</h2>
                <p className={cx("swiper-description")}>{item.description}</p>
                <p className={cx("swiper-author")}>{item.author}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Sswiper;
