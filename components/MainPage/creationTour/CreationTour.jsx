import classes from "./creationTour.module.css";
import Link from "next/link";
import Container from "@/components/UI/container/Container";

const CreationTour = () => {
  return (
    <section className={classes.CreationTour}>
      <Container>
        <div className={classes.inner}>
          <h4>Хотите индивидуальный маршрут?</h4>
          <p className={classes.sub_title}>
            Создайте свой тур по индивидуальному желаемому маршруту с Minzifa
            Travel.
          </p>

          <button className={classes.btn}>
            <Link href={"/"}> Создать индивидуальный тур </Link>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default CreationTour;
