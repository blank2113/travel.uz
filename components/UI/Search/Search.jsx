import classes from './search.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className={classes.Search}>
      <input
        type="search"
        className={classes.input}
        placeholder="Найти путишествие"
      />
      <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} />
    </div>
  );
};

export default Search;