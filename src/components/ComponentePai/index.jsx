import * as S from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";

import { Images } from "../../assets/Images";

export default function ComponentePai() {
  return (
    <S.Container>
      <Swiper spaceBetween={50} slidesPerView={1} navigation pagination>
        {ArrayObjectsImages.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <h1>{item.textAlt}</h1>
              <S.Image src={item.url} alt={item.textAlt} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Container>
  );
}
