import Container from "@/components/UI/container/Container";
import classes from "./team.module.css";
import { useGetTeamMembersQuery } from "@/store/middleWares/teamApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Team = () => {
  const { data = [] } = useGetTeamMembersQuery();
  console.log(data);
  return (
    <div className={classes.Team}>
      <Container>
        <div className={classes.inner}>
          <h2>Наша команда</h2>
          <div className={classes.card_wrapper}>
            {data.map((item) => (
              <div key={item.id} className={classes.card}>
                <div className={classes.top}>
                  <Image
                    src={`https://turi-uzbekistana.ru/${item.photo}`}
                    alt="image"
                    blurDataURL={`https://turi-uzbekistana.ru/${item.photo}`}
                    placeholder="blur"
                    className={classes.img}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className={classes.mid}>
                  <p className={classes.name}>{item.name}</p>
                  <p className={classes.poss}>{item.position}</p>
                  <p className={classes.emp}>{item.employment}</p>
                </div>
                <div className={classes.bottom}>
                  <a
                    href="https://wa.me/998936203300"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a
                    href="https://t.me/+998936203300"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTelegramPlane} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
