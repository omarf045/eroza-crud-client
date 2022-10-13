import logo from "./banner.jpg";
import "./App.css";

//importamos los componentes
import CompShowArticulos from "./articulo/ShowArticulos";
import CompCreateArticulo from "./articulo/CreateArticulo";
import CompEditArticulo from "./articulo/EditArticulo";

//importamos el router
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          width={windowSize.innerWidth}
          className="logo"
          alt="logo"
        />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompShowArticulos />} />
          <Route path="/create" element={<CompCreateArticulo />} />
          <Route path="/edit/:id" element={<CompEditArticulo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
