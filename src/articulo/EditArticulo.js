import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "https://eroza-crud-server-production.up.railway.app/articulos/";

const CompEditArticulo = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  //procedimiento para actualizar
  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      nombre: nombre,
      precio: precio,
    });
    navigate("/");
  };

  useEffect(() => {
    getArticuloById();
  }, [nombre, precio]);

  const getArticuloById = async () => {
    const res = await axios.get(URI + id);
    setNombre(res.data.nombre);
    setPrecio(res.data.precio);
  };

  return (
    <div>
      <h3>Edit POST</h3>
      <form onSubmit={update}>
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
          actualizar
        </button>
      </form>
    </div>
  );
};

export default CompEditArticulo;
