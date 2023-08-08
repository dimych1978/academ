import styles from './App-style/App.module.css'
import Nav from './components/main/nav/nav'
import Centerblock from './components/main/centerblock/centerblock'
import SideBar from './components/main/sidebar/sidebar'
import PlayBar from './components/player-bar/player-bar'
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <main className={styles.main}>
            <Nav />
            <Centerblock />
            <SideBar />
          </main>
          <PlayBar />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
