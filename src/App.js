import "./App.css";
import { useState ,useEffect} from "react";
import Header from "./pages/Header/Header";
import Intro from "./pages/Intro/Intro";
import Experience from "./pages/Experience/Experience";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Footer from "./pages/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  // 預設是電腦版
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPositionY,setScrollPositionY] = useState(0)
  let borwserWidth;

  // 判斷現在網頁畫面寬度
  window.addEventListener("resize", () => {
    borwserWidth = window.innerWidth;
    console.log(borwserWidth);
    if (borwserWidth < 430) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

   // 判斷現在滑動到哪裡
   window.addEventListener("scroll", () => {
    setScrollPositionY(window.pageYOffset);
  });


  return (
    <>
      <Header />
      <Intro isMobile={isMobile} scrollPositionY={scrollPositionY}/>
      {/* 經歷 */}
      <Experience />

      {/* 技能 */}
      <Skills />
      {/* 作品集 */}
      <Portfolio isMobile={isMobile}/>
      {/* 遊戲 */}
      {/* <Game /> */}
      {/* footer */}
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;
