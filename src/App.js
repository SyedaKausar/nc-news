import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Topics from "./components/Topics";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/topics/:topic" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
