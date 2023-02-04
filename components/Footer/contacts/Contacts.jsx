import classes from './contacts.module.css'
import Image from 'next/image'
import logo from '../../../public/logo-horizontal.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp,faTelegram} from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'


const Contacts = () => {
    const data = useSelector(state => state.contacts.value)

    
  return (
    <div className={classes.Contacts}>
        <div className={classes.top}>
            <Image src={logo} width={205} height={40} alt="logo"/>
            <p className={classes.descr}>Minzifa Travel — это сайт с турами по Узбекистану и Центральной Азии от тревел-экспертов с 20 летним опытом работы.</p>
            <p className={classes.text}>Приветствуем вас тепло и радостно и приглашаем Вас в удивительные, яркие и запоминающиеся путешествия по великому Шелковому пути.</p>
            <p>Хотите обсудить детально? свяжитесь с нами.</p>
        </div>
        <div className={classes.bottom}>
            <p className={classes.sub_title}>Наши контакты:</p>
            <div>
                <ul className={classes.list}>{data.map(item => 
                    <p key={item.id} className={classes.item}>
                        <FontAwesomeIcon icon={item.id === 1 ? faPhone : 
                        item.id === 2? faWhatsapp : item.id === 3?faTelegram : faEnvelope}/>
                        <a href={item.link} className={classes.link}>{item.name}</a>
                    </p>)}</ul>
            </div>
        </div>
    </div>
  )
}

export default Contacts