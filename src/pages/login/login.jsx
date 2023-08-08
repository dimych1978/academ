import Nav from "../../components/main/nav/nav";
import styles from "/src/App-style/App.module.css";
import PlayBar from "../../components/player-bar/player-bar";
import Footer from "../../components/footer";
import Search from "../../components/main/search/search";
import Title from "../title/title";


const Login = () => {
    return(
        <div className="App">
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <main className={styles.main}>
              <Nav />
              <>
                <Search />
                <Title/>
              </>
            </main>
            <PlayBar />
            <Footer />
          </div>
        </div>
      </div>
    )
}
export default Login