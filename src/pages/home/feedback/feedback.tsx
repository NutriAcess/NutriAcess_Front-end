import { Text } from "../../../components/text/text";
import CardFeedback from "../components/cardFeedback/cardFeedback";
import { Container, FeedbackContainer, Title } from "./feedback.styles";

import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { mockFeedback } from "./mock-feedback";

const Feedback = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType>();

  function handleSwipeRight() {
    swiperInstance?.slideNext();
  }

  function handleSwipeLeft() {
    swiperInstance?.slidePrev();
  }

  function renderFeedbacks() {
    return (
      <FeedbackContainer>
        <ArrowCircleLeft
          size="150"
          color="#000"
          onClick={handleSwipeLeft}
          style={{ cursor: "pointer" }}
        />

        <Swiper
          spaceBetween={24}
          slidesPerView={3}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {mockFeedback.map((feedback, idx) => {
            return (
              <SwiperSlide key={`key_${idx}`}>
                <CardFeedback
                  description={feedback.description}
                  image={feedback.image}
                  name={feedback.name}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <ArrowCircleRight
          size="150"
          color="#000"
          onClick={handleSwipeRight}
          style={{ cursor: "pointer" }}
        />
      </FeedbackContainer>
    );
  }

  return (
    <Container>
      <Title>
        <Text weight={600} height={1.7} color="preto" size="28">
          Feedback dos Usuários
        </Text>
      </Title>
      {renderFeedbacks()}
    </Container>
  );
};

export default Feedback;
