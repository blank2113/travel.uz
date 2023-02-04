import classes from "./filterBlock.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  getInputValue,
  getDaysValue,
  getCountryValue,
  getTypeValue,
} from "@/store/slice/input";
import { useSelector, useDispatch } from "react-redux";

const FilterBlock = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.input.value);
  const days = useSelector((state) => state.input.days);
  const inputs = useSelector((state) => state.input.countries);
  const countryValue = useSelector((state) => state.input.countryValue);
  const types = useSelector((state) => state.input.types);
  const typeValue = useSelector((state) => state.input.typeValue);
  const [active, setActive] = useState(false);

  return (
    <div className={classes.Filter}>
      <div
        className={
          active ? `${classes.inner} ${classes.active}` : `${classes.inner}`
        }
      >
        <div
          className={
            active ? `${classes.header} ${classes.active}` : `${classes.header}`
          }
          onClick={() => setActive(!active)}
        >
          <p>Фильтр</p>
          <FontAwesomeIcon icon={active ? faXmark : faSliders} className={classes.icon}/>
        </div>
        <div
          className={
            active ? `${classes.wrap} ${classes.active}` : `${classes.wrap}`
          }
        >
          <div className={classes.top}>
            <div className={classes.price}>
              <p className={classes.title}>Цена, $</p>
              <input
                type="range"
                className={classes.range}
                min={140}
                max={3750}
                name="price"
                value={value}
                onChange={(e) => dispatch(getInputValue(e.target.value))}
              />
              <div className={classes.reflect}>
                <p className={classes.point}>70</p>
                <p className={classes.point}>{value}</p>
              </div>
            </div>
            <div className={classes.days}>
              <p className={classes.title}>Дни</p>
              <input
                type="range"
                className={classes.range}
                min={2}
                max={21}
                name="days"
                value={days}
                onChange={(e) => dispatch(getDaysValue(e.target.value))}
              />
              <div className={classes.reflect}>
                <p className={classes.point}>1</p>
                <p className={classes.point}>{days}</p>
              </div>
            </div>
          </div>
          <div className={classes.bottom}>
            <div className={classes.country}>
              <p>По страннам:</p>
              <select className={classes.countries}>
                {inputs.map((item, index) => (
                  <option
                    className={
                      countryValue === item
                        ? `${classes.country_item} ${classes.active}`
                        : `${classes.country_item}`
                    }
                    onClick={() => dispatch(getCountryValue(item))}
                    key={index}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.types}>
              <p>По типу туров:</p>
              <select className={classes.types_wrapper}>
                {types.map((item) => (
                  <option
                    className={
                      typeValue === item.value
                        ? `${classes.type_item} ${classes.active}`
                        : `${classes.type_item}`
                    }
                    onClick={() => dispatch(getTypeValue(item.value))}
                    key={item.id}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBlock;
