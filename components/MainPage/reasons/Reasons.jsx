import classes from "./reasons.module.css";
import Image from "next/image";
import img1 from "../../../public/tour-guide.png";
import img2 from "../../../public/family-trip.png";
import img3 from "../../../public/customer-review.png";
import Container from "@/components/UI/Container/Container";

const Reasons = () => {
  return (
    <section className={classes.Reasons}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.item}>
            <Image src={img1} alt="image" width={100} height={100} />
            <p className={classes.title}>Лучшая команда гидов</p>
            <p className={classes.text}>
              Вся магия в личном общении. Мы находим лучших гидов, для которых
              увлекать – это призвание!
            </p>
          </div>
          <div className={classes.item}>
            <Image src={img2} alt="image" width={100} height={100} />
            <p className={classes.title}>Дружеские путешествия</p>
            <p className={classes.text}>
              Проводим только качественные индивидуальные и групповые
              путешествия.
            </p>
          </div>
          <div className={classes.item}>
            <Image src={img3} alt="image" width={100} height={100} />
            <p className={classes.title}>Свыше 200 отзывов</p>
            <p className={classes.text}>
              Нас любят путешественники. В 2021 году на наших путешествиях
              побывало 980 человек.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reasons;
