import Header from "components/Header";
import MenuNav from "components/MenuNav";
import Sobre from "pages/Sobre";
import Home from "pages/Home";
import Menu from "pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <MenuNav />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="cardapio" element={<Menu />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
