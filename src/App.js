import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Game from "./components/Game";

function App() {
  return (
    <>
      <Header />
      <Intro />
      {/* 經歷 */}
      <Experience />

      {/* 技能 */}
      <Skills />
      {/* 作品集 */}
      <Portfolio />
      {/* 遊戲 */}
      {/* <Game /> */}
      {/* footer */}
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
