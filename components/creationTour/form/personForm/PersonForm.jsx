import { useSelector, useDispatch } from "react-redux";
import { getPersonValue } from "@/store/slice/getFormValue";
import classes from "./personFrom.module.css";

const PersonForm = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.form.persons);
  const personsValue = useSelector((state) => state.getFormValue.persons);
  return (
    <>
      <p className={classes.sub_title}>Кто путешествует с Вами?</p>
      <ul className={classes.list}>
        {persons.map((person, index) => (
          <li
            onClick={() => dispatch(getPersonValue(person))}
            className={
              personsValue === person
                ? `${classes.item} ${classes.active}`
                : `${classes.item}`
            }
            key={index}
          >
            {person}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PersonForm;
