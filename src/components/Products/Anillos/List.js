import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import "styles/index.css";
import axios from "axios";

function List({ anillos }) {
  const onPrivate = (id) => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    const formData = new FormData();
    formData.append("id", id);

    const fetchData = async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/app/EditAnilloPrivate`,
          formData,
          config
        );
        if (res.status === 200) {
          alert("anillo privado");
        } else {
          alert("anillo no privado");
        }
      } catch (error) {
        alert("error al enviar");
      }
    };
    fetchData();
  };
  const onPublic = (id) => {
    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    const formData = new FormData();
    formData.append("id", id);

    const fetchData = async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/app/EditAnilloPublic`,
          formData,
          config
        );
        if (res.status === 200) {
          alert("anillo publicado");
        } else {
          alert("anillo no publicado");
        }
      } catch (error) {
        alert("error al enviar");
      }
    };
    fetchData();
  };

  const check = (estado) => {
    if (estado === "publico") {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (event) => {
    const { checked, id } = event.target;
    if (checked) {
      onPublic(id);
    } else {
      onPrivate(id);
    }
  };

  return (
    <div className="ml-5 overflow-hidden bg-white sm:rounded-md">
      <ul className="divide-y divide-gray-300">
        {anillos &&
          anillos.map((anillo) => (
            <li
              key={anillo.id}
              className=" flex justify-start gap-20 py-5  hover:bg-slate-200 ">
              <Link to={`/Anillos/EditAn/${anillo.id}`}>
                <div className="mx-5 flex gap-8 min-w-0 overflow-auto">
                  <div className="overflow-auto flex gap-8">
                    <img
                      className="object-cover h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${anillo.photo}`}
                      alt=""
                    />
                    <img
                      className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${anillo.photo2}`}
                      alt=""
                    />
                    <img
                      className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${anillo.photo3}`}
                      alt=""
                    />
                  </div>
                  <div className="mx-8 min-w-10 flex gap-8 overflow-auto">
                    <div>
                      <h6 className="font-bold">Nombre:</h6>
                      <p className="text-sm leading-5 text-black">
                        {anillo.name}
                      </p>
                      <h6 className="font-bold">Precio:</h6>{" "}
                      <p className="text-sm leading-5 text-black">
                        {anillo.precio_unidad}
                      </p>
                      <h6 className="font-bold">Pureza:</h6>
                      <p className="text-sm leading-5 text-black">
                        {anillo.pureza}
                      </p>
                      <h6 className="font-bold">Size:</h6>
                      <p className="text-sm leading-5 text-black">
                        {anillo.size}
                      </p>
                      <h6 className="font-bold">Peso:</h6>
                      <p className="text-sm leading-5 text-black">
                        {anillo.peso_neto}
                      </p>
                      <h6 className="font-bold">Genero:</h6>{" "}
                      <p className="text-sm leading-5 text-black">
                        {anillo.genero_usuario}
                      </p>
                    </div>
                    <div>
                      <h6 className="font-bold">Lugarde uso:</h6>{" "}
                      <p className="text-sm leading-5 text-black">
                        {anillo.lugar_de_uso}
                      </p>
                      <h6 className="font-bold">Cantidad:</h6>{" "}
                      <p className="text-sm leading-5 text-black">
                        {anillo.cantidad}
                      </p>
                      <h6 className="font-bold">Tipo:</h6>{" "}
                      <p className="text-sm leading-5 text-black">
                        {anillo.tipo_anillo}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {check(anillo.estado) ? (
                <>
                  <div className="flex items-center">
                    <div className="switch" key={anillo.id}>
                      <input
                        className="switch-check"
                        id={anillo.id}
                        type="checkbox"
                        checked={check(anillo.estado)}
                        onChange={handleChange}
                      />
                      <label className="switch-label" htmlFor={anillo.id}>
                        Check
                        <span></span>
                      </label>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <div className="switch" key={anillo.id}>
                      <input
                        className="switch-check"
                        id={anillo.id}
                        type="checkbox"
                        onChange={handleChange}
                      />
                      <label className="switch-label" htmlFor={anillo.id}>
                        Check
                        <span></span>
                      </label>
                    </div>
                  </div>
                </>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(List);
