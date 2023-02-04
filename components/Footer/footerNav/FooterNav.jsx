import classes from './footerNav.module.css'
import { useSelector } from 'react-redux'
import Link from 'next/link'


const FooterNav = () => {
const nav = useSelector(state => state.footerNav.value)
const info = useSelector(state => state.footerInfo.value)
  return (
    <div className={classes.FooterNav}>
        <div className={classes.item}>
            <p className={classes.title}>О Minzifa Travel</p>
            <ul className={classes.list}>{
                nav.map(nav => <li key={nav.id}>
                    <Link href={nav.link}>{nav.name}</Link>
                </li>)
            }</ul>
        </div>
        <div className={classes.item}>
            <p className={classes.title}>Полезная информация</p>
            <ul className={classes.list}>{
                info.map(nav => <li key={nav.id}>
                    <Link href={nav.link}>{nav.name}</Link>
                </li>)
            }</ul>
        </div>
    </div>
  )
}

export default FooterNav