import Nav from "/src/components/main/nav/nav";
import stylesParents from "/src/components/main/main-style/main.module.css";
import styles from "/src/App-style/App.module.css";
import PlayBar from "/src/components/player-bar/player-bar";
import Footer from "/src/components/footer";
import Search from "/src/components/main/search/search";
import Title from "./title/title";

const Indi = () => {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <Nav />
            <div className={stylesParents._centerblock}>
              <Search />
              <Title pageName={"Инди-заряд"} />
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

export default Indi