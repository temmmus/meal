import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import CategoriesPage from "./pages/CategoriesPage";
import CategoryPage from "./pages/CategoryPage";
import MealsPage from "./pages/MealsPage";
import RecipePage from "./pages/RecipePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Navigate to="/categories" replace />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
          <Route path="/meals/:letter" element={<MealsPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Main>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
