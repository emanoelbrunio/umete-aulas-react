import * as S from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Import Swiper styles

export default function Slides({ images }) {
  return (
    <S.Container>
      <Swiper slidesPerView={1} pagination={{ clickable: true }} navigation>
        {images.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <S.BoxImageTitle>
                <S.TitleImage>{item.title}</S.TitleImage>
                <S.Image src={item.url} alt={item.title} />
              </S.BoxImageTitle>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </S.Container>
  );
}
