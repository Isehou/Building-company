import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import img1 from "../image/1.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/4.jpg";

export default function SwiperImg() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="/no image/" className="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="/no image/" className="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="/no image/" className="swiper-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="/no image/" className="swiper-img" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
