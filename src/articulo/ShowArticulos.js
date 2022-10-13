import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/articulos/";

const CompShowArticulos = () => {
  const [articulos, setArticulo] = useState([]);
  useEffect(() => {
    getArticulos();
  }, []);

  //procedimineto para mostrar todos los articulos
  const getArticulos = async () => {
    const res = await axios.get(URI);
    setArticulo(res.data);
  };

  //procedimineto para eliminar un articulo
  const deleteArticulo = async (id) => {
    await axios.delete(`${URI}${id}`);
    getArticulos();
  };

  console.log(articulos);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary mt-2 mb-2">
            <i className="fas fa-plus"></i>
          </Link>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              {articulos !== []
                ? articulos.map((articulo) => (
                    <tr key={articulo.id}>
                      <td> {articulo.nombre} </td>
                      <td> {articulo.precio} </td>
                      <td>
                        <Link
                          to={`/edit/${articulo.id}`}
                          className="btn btn-info"
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                        <button
                          onClick={() => deleteArticulo(articulo.id)}
                          className="btn btn-danger"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                : {}}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompShowArticulos;
