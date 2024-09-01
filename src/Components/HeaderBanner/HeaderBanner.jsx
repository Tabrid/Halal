import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';  // Ensure you have the correct styles for Swiper


export default function HeaderBanner() {
  return (
    <div className="max-h-[600px] mt-3 lg:mt-0 md:mt-0">
      <div className="relative">
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full">
            <img
              className="overflow-hidden md:max-h-[600px]"
              src={`https://glorianoor.com/public/storage/images/slider/QN2V5iKif8mMtO0UBThGJhG4gqmN8OYteMDGKJlb.jpg`}
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img
              className="overflow-hidden md:max-h-[600px]"
              src={`https://glorianoor.com/public/storage/images/slider/PHYcRQmHWK3Mt2Icnl9GYf9ejQjeUBiOHt2WarKm.jpg`}
              alt=''
            />
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <img
              className="overflow-hidden md:max-h-[600px]"
              src={`https://glorianoor.com/public/storage/images/slider/vStd50frMqqNnUYG2GkrgFePtM6f2j06pCEfVQwX.png`}
              alt=''
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
