import Image from "next/image";
import classes from "./regards.module.css";
import img1 from "@/public/luggage.svg";
import img2 from "@/public/tripadvisorSertificate.svg";
import img3 from "@/public/tourist.svg";

const Regards = () => {
  return (
    <div className={classes.Regards}>
      <div className={classes.item}>
      <div className={classes.photo}>
          <Image
            src={img1}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={classes.content}>
          <p className={classes.title}>800+</p>
          <p className={classes.text}>организованных туров</p>
        </div>
      </div>
      <div className={classes.item}>
      <div className={classes.photo}>
          <Image
            src={img2}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={classes.content}>
          <p className={classes.title}>250+</p>
          <p className={classes.text}>
            отзывов на{" "}
            <a
              href="https://www.tripadvisor.ru/Attraction_Review-g303936-d10130582-Reviews-Minzifa_Travel-Bukhara_Bukhara_Province.html"
              target="_blank"
              rel="noopener"
            >
              tripadvisor.com
            </a>
          </p>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.photo}>
          <Image
            src={img3}
            alt="image"
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        <div className={classes.content}>
          <p className={classes.title}>2150+</p>
          <p className={classes.text}>довольных туристов</p>
        </div>
      </div>
    </div>
  );
};

export default Regards;
