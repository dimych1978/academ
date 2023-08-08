import BurgerLine from './burger/burger'
import { useState } from 'react'
import styles from './nav-style/nav.module.css'
import stylesParents from "/src/components/main/main-style/main.module.css";
import MenuItem from './menu/menu'
import Logo from './logo/logo'

function Nav() {
  const [status, setStatus] = useState('none')
  const hideStatus = () => {
    setStatus(status === 'inline-block' ? 'none' : 'inline-block')
  }
  return (
    <div className={stylesParents._nav}>
      <div className={styles._logo}>
        <Logo />
      </div>
      <div className={styles._burger} onClick={hideStatus}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
      </div>
      <div
        className={styles._menu}
        style={{ display: status, position: 'absolute' }}
      >
        <MenuItem />
      </div>
    </div>
  )
}
export default Nav
