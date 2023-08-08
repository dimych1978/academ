import { menuList } from "../../../music.data"
import styles from './menu-style/menu.module.css'
import {NavLink} from "react-router-dom"

function MenuItem() {
  
    return (
      <ul className={styles.list}>
        {menuList.map((paragraph) => (
          <li className={styles.item} key={paragraph.id}>
            <NavLink className = {styles.link} to={paragraph.menuItemLink}>{paragraph.menuItemName}</NavLink>
          </li>
        ))}
      </ul>
    )
  }

  export default MenuItem