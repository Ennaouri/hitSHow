import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-social/bootstrap-social.css";
import './App.css';
import Header from './components/Header';
import Hero from "./components/Hero";
import Categorie from "./components/Categorie";
import Equipe from "./components/Equipe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Categorie />
      <Equipe />
      <Footer />
    </div>
  );
}

export default App;
