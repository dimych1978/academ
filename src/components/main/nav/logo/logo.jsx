import styles from "/src/components/main/nav/nav-style/nav.module.css";
import thisStyles from "./logo-style/logo.module.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className={styles._logo}>
      <Link to={"/"}>
        <img className={thisStyles._image} src="img/logo.png" alt="logo"></img>
      </Link>
    </div>
  );
}

export default Logo;
