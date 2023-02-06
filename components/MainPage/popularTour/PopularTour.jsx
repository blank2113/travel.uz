import classes from "./popularTour.module.css";
import { useGetPopularTourValuesQuery } from "../../../store/middlewares/popularTourApi";
import Card from "../../UI/card/Card";
import Container from "../../UI/container/Container";

const PopularTour = ({ title }) => {
  const { data } = useGetPopularTourValuesQuery();
  return (
    <>
      {data ? (
        <section className={classes.PopularTour}>
          <Container>
            <h2>{title}</h2>
          </Container>
          <div className={classes.inner}>
            {data.map((item) => (
              <div className={classes.wrapper}>
                <Card item={item} key={item.id} />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
};

export default PopularTour;
