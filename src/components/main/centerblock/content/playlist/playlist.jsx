import { useEffect, useState } from "react";
import styles from "./playlist.module.css";
import stylesTrack from "./track/track.module.css";

function PlayList({ title, span, author, album, time }) {
  const [skeleton, setSkeleton] = useState({
    backgroundColor: "#313131",
    widthFirst: " 64% ",
    widthSecond: "25%",
    height: "19px",
    color: "#313131",
    display: "none",
  });

  const [hRef, setHRef] = useState("");

  const context = () => {
    setTimeout(() => {
      setSkeleton({
        ...skeleton,
        backgroundColor: "",
        widthFirst: "",
        widthSecond: "",
        height: "",
        color: "",
        display: "block",
      });
      setHRef("/img/icon/sprite.svg#icon-note");
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener("load", context());
  });

  return (
    <div className={styles._item}>
      <div className={styles._track}>
        <div className={stylesTrack._title}>
          <div
            className={stylesTrack["_title-image"]}
            style={{
              backgroundColor: skeleton.backgroundColor,
              width: "51px",
              height: "51px",
            }}
          >
            <svg className={stylesTrack["_title-svg"]} alt="music">
              <use xlinkHref={hRef}></use>
            </svg>
          </div>
          <div
            className={stylesTrack["_title-text"]}
            style={{
              backgroundColor: skeleton.backgroundColor,
              width: skeleton.widthFirst,
              height: skeleton.height,
            }}
          >
            <a
              className={stylesTrack["_title-link"]}
              href="http://"
              style={{ color: skeleton.color }}
            >
              {title}
              <span
                className={stylesTrack["_title-span"]}
                style={{ color: skeleton.color }}
              >
                {span}
              </span>
            </a>
          </div>
        </div>
        <div
          className={stylesTrack._author}
          style={{
            backgroundColor: skeleton.backgroundColor,
            width: skeleton.widthSecond,
            height: skeleton.height,
          }}
        >
          <a
            className={stylesTrack["_author-link"]}
            href="http://"
            style={{ color: skeleton.color }}
          >
            {author}
          </a>
        </div>
        <div
          className={stylesTrack._album}
          style={{
            backgroundColor: skeleton.backgroundColor,
            width: skeleton.widthSecond,
            height: skeleton.height,
          }}
        >
          <a
            className={stylesTrack["_album-link"]}
            href="http://"
            style={{ color: skeleton.color }}
          >
            {album}
          </a>
        </div>
        <div
          className={stylesTrack._time}
          style={{
            backgroundColor: skeleton.backgroundColor,
          }}
        >
          <svg className={stylesTrack["_time-svg"]} alt="time">
            <use
              xlinkHref="/img/icon/sprite.svg#icon-like"
              style={{ display: skeleton.display }}
            ></use>
          </svg>
          <span
            className={stylesTrack["_time-text"]}
            style={{ color: skeleton.color }}
          >
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlayList;
