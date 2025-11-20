import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Main from "./pages/Main/Main.jsx";
import Cotiza from "./pages/Cotiza/Cotiza.jsx";
import Cars from "./pages/Cars/Cars.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import FloatingBtn from "./components/FloatingBtn/FloatingBtn.jsx";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />}></Route>
            <Route path="Cotiza" element={<Cotiza />}></Route>
            <Route path="Cars" element={<Cars />}></Route>
            <Route path="Contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      <FloatingBtn />
    </div>
  );
}
