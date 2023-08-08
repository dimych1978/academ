import { useState } from "react";
import { tracks } from "../../music.data";
import { Link } from "react-router-dom";
import styles from "./search-style/search.module.css";
import stylesParents from "/src/components/main/centerblock/centerblock-style/centerblock.module.css";

function SearchIcon() {
  return (
    <svg className={styles._svg}>
      <use xlinkHref={"/img/icon/sprite.svg#icon-search"}></use>
    </svg>
  );
}

const Suggest = ({ search, display }) => {
  return (
    <ul className={styles._suggest} style={{ display }}>
      {search.map((item) => (
        <Link className={styles["_suggest-link"]} key={item.id} to={item.link}>
          {item.title}
        </Link>
      ))}
    </ul>
  );
};

function Search() {
  const [search, setSearch] = useState([]);
  const [display, setDisplay] = useState("none");
  const inputHandler = (e) => {
    e.target.value ? setDisplay("flex") : setDisplay("none");
    const suggest = tracks.filter((track) =>
      track.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearch(suggest);
  };

  return (
    <>
      <div className={stylesParents._search}>
        <SearchIcon />
        <input
          className={styles._text}
          type="search"
          placeholder="Поиск"
          name="search"
          onChange={inputHandler}
        ></input>
      </div>
      <Suggest display={display} search={search} />
    </>
  );
}
export default Search;
