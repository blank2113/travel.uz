import ContactDetails from "@/components/contactsPage/contactDetails/ContactDetails";
import Maps from "@/components/contactsPage/map/Maps";
import PartnerDetail from "@/components/contactsPage/partnerDetails/PartnerDetail";
import Container from "@/components/UI/container/Container";
import Wrapper from "@/components/UI/wrapper/Wrapper";
import classes from "@/styles/contacts.module.css";
import {useGetTeamMembersQuery} from '@/store/middleWares/teamApi'
import Head from "next/head";
import Team from "@/components/aboutPage/team/Team";

const contacts = () => {
    const {data=[]}= useGetTeamMembersQuery()
  return (
    <>
      <Head>
        <title>
          Контакты. Номера телефонов, почта, адрес. Минзифа Тревел, туры в
          Узбекистан
        </title>
      </Head>
      <Wrapper>
        <div className={classes.inner}>
          <Container>
            <h1 className={classes.title}>
              Контакты. Номера телефонов, почта, адрес. Минзифа Тревел, туры в
              Узбекистан
            </h1>
            <div className={classes.content}>
              <ContactDetails />
              <PartnerDetail />
            </div>
            <Maps/>
          </Container>
          <div className={classes.team}>
           <Team/>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default contacts;
