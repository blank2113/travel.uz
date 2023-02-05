import Image from "next/image";
import classes from "./form.module.css";
import photo from "../../../public/timurPhoto1.png";
import HotelForm from "./hotelForm/HotelForm";
import DayForm from "./dayForm/DayForm";
import CalendarForm from "./calendarForm/CalendarForm";
import DirectionForm from "./directionForm/DirectionForm";
import TextForm from "./textForm/TextForm";
import PersonForm from "./personForm/PersonForm";
import CountryForm from "./countryForm/CountryForm";
import NameForm from "./nameForm/NameForm";
import EmailForm from "./emailForm/EmailForm";
import TelForm from "./telForm/TelForm";
import Link from "next/link";

const Form = () => {
  return (
    <section className={classes.Form}>
      <div className={classes.inner}>
        <div className={classes.static}>
          <div className={classes.wrapper}>
            <div className={classes.text}>
              Меня зовут Тимур. Наша команда составит отличный тур согласно
              вашему запросу. Мы ответим вам в течение следующих 24 часов.
            </div>
            <Image src={photo} alt="photo" className={classes.img} />
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.top}>
            <h3 className={classes.content_title}>
              Какое ваше идеальное путешествие?
            </h3>
            <HotelForm />
            <DayForm />
            <CalendarForm />
            <DirectionForm />
            <TextForm />
          </div>
          <div className={classes.bottom}>
            <h3 className={classes.content_title}>
              Какое ваше идеальное путешествие?
            </h3>
            <PersonForm />
            <CountryForm />
            <NameForm />
            <EmailForm />
            <TelForm />
          <div className={classes.confidential}>
            <p>
              Нажимая на кнопку Вы даете согласие на обработку персональных
              данных и соглашаетесь с <br/>
               <Link href={"/confidential"}><span>Политикой конфиденциальности</span></Link>
            </p>
          </div>
          </div>
          <button className={classes.btn}>Отправить мой запрос</button>
        </div>
      </div>
    </section>
  );
};

export default Form;
