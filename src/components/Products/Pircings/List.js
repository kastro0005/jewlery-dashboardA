import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import "styles/index.css";
import axios from "axios";

function List({ pircings }) {
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
          `${process.env.REACT_APP_API_URL}/app/EditPircingPrivate`,
          formData,
          config
        );
        if (res.status === 200) {
          alert("pircing privado");
        } else {
          alert("pircing no privado");
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
          `${process.env.REACT_APP_API_URL}/app/EditPircingPublic`,
          formData,
          config
        );
        if (res.status === 200) {
          alert("pircing publicado");
        } else {
          alert("pircing no publicado");
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
        {pircings &&
          pircings.map((pircing) => (
            <li
              key={pircing.id}
              className="flex justify-start gap-20 py-5  hover:bg-slate-200 ">
              <Link to={`/Pircings/EditPi/${pircing.id}`}>
                <div className="mx-5 flex min-w-0 gap-x-8">
                  <div className="overflow-auto flex gap-x-8">
                    <img
                      className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${pircing.photo}`}
                      alt=""
                    />
                    <img
                      className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${pircing.photo2}`}
                      alt=""
                    />
                    <img
                      className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${pircing.photo3}`}
                      alt=""
                    />
                  </div>
                  <div className="mx-8 min-w-0 flex gap-8 overflow-auto">
                    <div>
                      <h6 className="font-bold">Nombre:</h6>
                      <p className="text-sm leading-5 text-black">
                        {pircing.name}
                      </p>
                      <h6 className="font-bold">Precio:</h6>{" "}
                      <p className="text-sm leading-5 text-black">
                        {pircing.precio_unidad}
                      </p>
                      <h6 className="font-bold">Pureza:</h6>
                      <p className="text-sm leading-5 text-black">
                        {pircing.pureza}
                      </p>
                      <h6 className="font-bold">Size:</h6>
                      <p className="text-sm leading-5 text-black">
                        {pircing.size}
                      </p>
                      <h6 className="font-bold">Peso:</h6>
                      <p className="text-sm leading-5 text-black">
                        {pircing.peso_neto}
                      </p>
                      <h6 className="font-bold">Genero:</h6>{" "}
                      <p className="text-sm leading-5 text-black">
                        {pircing.genero_usuario}
                      </p>
                    </div>
                    <div>
                      <h6 className="font-bold">Lugar de uso:</h6>{" "}
                      <p className="text-sm leading-5 text-black">
                        {pircing.lugar_de_uso}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              {check(pircing.estado) ? (
                <>
                  <div className="flex items-center">
                    <div className="switch" key={pircing.id}>
                      <input
                        className="switch-check"
                        id={pircing.id}
                        type="checkbox"
                        checked={check(pircing.estado)}
                        onChange={handleChange}
                      />
                      <label className="switch-label" htmlFor={pircing.id}>
                        Check
                        <span></span>
                      </label>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <div className="switch" key={pircing.id}>
                      <input
                        className="switch-check"
                        id={pircing.id}
                        type="checkbox"
                        onChange={handleChange}
                      />
                      <label className="switch-label" htmlFor={pircing.id}>
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
