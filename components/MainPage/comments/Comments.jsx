import classes from "./comments.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import CommentCard from '../../UI/commentCard/CommentCard'

import {useGetCommentsValuesQuery} from '../../../store/middlewares/commentsApi'
import Container from "@/components/UI/Container/Container";

const Comments = () => {
  const {data=[]}= useGetCommentsValuesQuery()

  return (
    <section className={classes.Comments}>
    <Container>
    <div className={classes.inner}>
        <a href="a" className={classes.title}>
          Отзывы путешественников
        </a>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          cssMode={true}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          mousewheel={true}
          keyboard={true}
          className={classes.swiper}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
             <CommentCard item={item}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
    </section>
  );
};

export default Comments;
