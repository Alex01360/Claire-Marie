import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Pages/Header";
import Accueil from "../Pages/Accueil";
import Compétences from "../Pages/Compétences";
import Formation from "../Pages/Formation";
import Expériences from "../Pages/Expériences";

const App = () => {
  const basename=import.meta.env.MODE === "production" ?  '/Claire-Marie/' : '/';
  return (
    <>
      <BrowserRouter basename={basename}>
        <Header /> 
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Compétences" element={<Compétences />} />
          <Route path="/Formation" element={<Formation />} />
          <Route path="/Expériences" element={<Expériences />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
