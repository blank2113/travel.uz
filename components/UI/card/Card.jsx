import classes from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faCompass,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { getCardId } from "@/store/slice/cardId";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (item) {
      return setActive(true);
    } else {
      return setActive(false);
    }
  }, [item]);
  return (
    <>
      {active ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classes.card}
          onClick={() => dispatch(getCardId(item.id))}
        >
          <div className={classes.top}>
            <Image
              src={`https://turi-uzbekistana.ru/${item.photo}`}
              alt="image"
              blurDataURL={`https://turi-uzbekistana.ru/${item.photo}`}
              placeholder="blur"
              width="0"
              height="0"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <p className={classes.name}>{item.title}</p>
            <p
              className={
                item.status !== ""
                  ? `${classes.status} ${classes.active}`
                  : `${classes.status}`
              }
            >
              {item.label}
            </p>
            <p className={classes.sales}>
              {/* <FontAwesomeIcon icon={faTags} className={classes.icon2} /> */}
              {item.salePercent !== "" ? item.salePercent : "0"} %
            </p>
          </div>
          <div className={classes.bottom}>
            <div className={classes.priority}>
              <p className={classes.garanty}>
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className={classes.icon}
                />
                Гарантирован
              </p>
              <p className={classes.type}>
                <FontAwesomeIcon icon={faCompass} className={classes.icon} />
                {item.tourTyp}
              </p>
            </div>
            <div className={classes.country}>
              <p>{item.country}</p>
            </div>
            <div className={classes.content}>
              <div className={classes.content_item1}>
                <p className={classes.days}>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className={classes.icon2}
                  />
                  {item.countDays}
                </p>
                <p className={classes.location}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className={classes.icon}
                  />
                  {item.countDestinations}
                </p>
              </div>
              <div className={classes.content_item}>
                <p className={classes.prev_price}>от {item.oldPrice}$</p>
                <p className={classes.price}>от {item.price}$</p>
                <p>{item.rubPrice}</p>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Card;
