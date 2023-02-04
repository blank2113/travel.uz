import classes from "./countryCard.module.css";
import Image from "next/image";

const CountryCard = ({ item }) => {
  return (
    <div className={classes.CountryCard}>
      <Image
        src={`https://turi-uzbekistana.ru/${item.photo}`}
        alt="image"
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        className={classes.img}
      />
      <p className={classes.title}>{item.name}</p>
    </div>
  );
};

export default CountryCard;
