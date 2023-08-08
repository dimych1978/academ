import Nav from "../../components/main/nav/nav";
import stylesParents from "/src/components/main/main-style/main.module.css";
import styles from "/src/App-style/App.module.css";
import Content from "../../components/main/centerblock/content/content";
import PlayBar from "../../components/player-bar/player-bar";
import Footer from "../../components/footer";
import Search from "../../components/main/search/search";
import Title from "../title/title";

const MyTracks = () => {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <Nav />
            <div className={stylesParents._centerblock}>
              <Search />
                <Title  pageName={'Мои треки'} />
                <Content/>
            </div>
            <div className={stylesParents._sidebar} />
          </main>
          <PlayBar />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MyTracks;
