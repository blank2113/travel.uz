import classes from "./oneDayTour.module.css";
import { useGetOneDayTourValuesQuery } from "../../../store/middlewares/oneDayTourApi";
import Card from "../../UI/card/Card";
import Container from "../../UI/container/Container";

const OneDayTour = ({ title }) => {
  const { data = [] } = useGetOneDayTourValuesQuery();

  return (
    <>
      {data ? (
        <section className={classes.OneDayTour}>
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

export default OneDayTour;
