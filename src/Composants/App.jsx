import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Pages/Header";
import Accueil from "../Pages/Accueil";

const App = () => {
  const basename = import.meta.env.MODE === "production" ? '/Claire-Marie/' : '/';
  return (
    <>
      <BrowserRouter basename={basename}>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
