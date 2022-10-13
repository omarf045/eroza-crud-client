import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "https://eroza-crud-server-production.up.railway.app/articulos/";

const CompCreateArticulo = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();

  //procedimiento guardar
  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { nombre: nombre, precio: precio });
    navigate("/");
  };

  return (
    <div>
      <h3>Añadir articulo:</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Nombre: </label>
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Precio: </label>
          <textarea
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default CompCreateArticulo;
