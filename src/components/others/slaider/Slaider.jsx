import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tel1 from "./../../../assets/images/image 10.png";
import tel2 from "./../../../assets/images/image 11.png";
import tel3 from "./../../../assets/images/image 12.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const Slaider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        effect="coverflow"
        loop={true}
        spaceBetween={130}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        slidesPerView={1}
        centeredSlides={"auto"}
      >
        <SwiperSlide>
          <img src={tel1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tel2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={tel3} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slaider;
