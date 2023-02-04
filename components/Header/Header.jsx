import HeaderFixed from "./HeaderFixed/HeaderFixed"
import TopHeader from "./TopHeader/TopHeader"
import classes from './header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
        <TopHeader/>
        <HeaderFixed/>
    </header>
  )
}

export default Header