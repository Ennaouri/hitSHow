import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap-social/bootstrap-social.css";
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import ListHits from "./pages/ListHits";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/listHits" component={ListHits} />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
