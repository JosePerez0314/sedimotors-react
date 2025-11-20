import Header from "./components/Header";
import Main from "./components/Main";
import Cars from "./components/Cars";
import Cotiza from "./components/Cotiza";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingBtn from "./components/FloatingBtn";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Cotiza />
      <Cars />
      <Contact />
      <Footer />
      <FloatingBtn />
    </div>
  );
}
