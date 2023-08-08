/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import stylesParents from "/src/components/main/main-style/main.module.css";
import styles from "./sidebar-style/sidebar.module.css";
import { pageNames } from "/src/components/music.data";

function SideBarItem({ props, link }) {
  const [image, setImage] = useState({ background: { background: "#313131" } });
  const [alt, setAlt] = useState("");
  const element = useRef();

  const emulation = () => {
    setImage({
      img: `img/playlist0${props}.png`,
      background: { background: "#313131" },
    });
    setAlt("day's playlist");
  };
  useEffect(() => {
    const elementClass = element.current;
    setTimeout(() => {
      elementClass.addEventListener("load", emulation());
    }, 3000);
  });
  return (
    <div className={styles._item} ref={element} style={image.background}>
      <NavLink className={styles._link} to={link}>
        <img className={styles._img} src={image.img} alt={alt} />
      </NavLink>
    </div>
  );
}

function SideBar() {
  return (
    <div className={stylesParents._sidebar}>
      <div className={styles._personal}>
        <p className={styles["_personal-name"]}>Dmitrii.Bashkatov</p>
        <div className={styles._avatar}></div>
      </div>
      <div className={styles._block}>
        {pageNames.map((link) => (
          <div key={link.id} className={styles._list}>
            <SideBarItem props={link.id} link={link.menuItemLink} />
            {/* <SideBarItem props={2} link={link.menuItemLink}/>
          <SideBarItem props={3} link={link.menuItemLink}/> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
