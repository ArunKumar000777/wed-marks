import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/wddingStageImage.jpeg";
import image2 from "../assets/weddingStageImage2.jpeg";
import image3 from "../assets/weddingImage3.jpeg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
const SliderBanner = () => {
    return (
        // <div>
        //     <img src={image1} alt="" className="w-screen h-screen object-cover"/>
        //     <img src={image2} alt="" className="w-screen h-screen object-cover"/>
        // </div>
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
            autoplay={{
                delay: 3000, // Delay between slides in milliseconds
                disableOnInteraction: false, // Enable/disable autoplay on user interaction
            }}
        >
            <SwiperSlide>
                <img src={image3} alt="" className="w-screen h-screen object-cover" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image1} alt="" className="w-screen h-screen object-cover brightness-50" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={image2} alt="" className="w-screen h-screen object-cover brightness-50" />
            </SwiperSlide>
        </Swiper>
    );
};

export default SliderBanner;
