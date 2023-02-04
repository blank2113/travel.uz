import classes from './commentsCard.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import {
  faStar,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const CommentCard = ({item}) => {
  return (
    <div className={classes.CommentCard}>
    <p className={classes.title}>{item.name}</p>
    <div className={classes.rating}>
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
      <FontAwesomeIcon icon={faStar} />
    </div>
    <p>{item.text}</p>
    <div className={classes.details}>
      <div className={classes.date}>
        <FontAwesomeIcon icon={faCalendarDays} />
        <p>{item.date}</p>
      </div>
      <div className={classes.location}>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>{item.location}</p>
      </div>
    </div>
    <Link href={"/"}>
      <button className={classes.btn}>Подробнее</button>
    </Link>
  </div>
  )
}

export default CommentCard