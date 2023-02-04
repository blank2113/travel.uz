import classes from "./popularTour.module.css";
import {useGetPopularTourValuesQuery} from '../../../store/middlewares/popularTourApi'
import Card from "../../UI/card/Card";
import Container from "../../UI/container/Container";

const PopularTour = ({title}) => {
    const {data} = useGetPopularTourValuesQuery()
  return (
    <>
      {data ? (
        <section className={classes.PopularTour}>
          <Container>
            <h2>{title}</h2>
            <div className={classes.inner}>
              {data.map((item) => (
                <Card item={item} key={item.id} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}
    </>
  );
};

export default PopularTour;
