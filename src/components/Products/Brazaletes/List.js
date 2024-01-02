import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import "styles/index.css";
import axios from "axios";

function List({ brazaletes }) {
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
          `${process.env.REACT_APP_API_URL}/app/EditBrazaletePrivate`,
          formData,
          config
        );
        if (res.status === 200) {
          alert("brazalete privado");
        } else {
          alert("brazalete no privado");
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
          `${process.env.REACT_APP_API_URL}/app/EditBrazaletePublic`,
          formData,
          config
        );
        if (res.status === 200) {
          alert("brazalete publicado");
        } else {
          alert("brazalete no publicado");
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
        {brazaletes &&
          brazaletes.map((brazalete) => (
            <li
              key={brazalete.id}
              className="flex justify-start gap-20 py-5  hover:bg-slate-200 ">
              <Link to={`/Brazaletes/EditBr/${brazalete.id}`}>
                <div className="mx-5 flex min-w-0 gap-x-8">
                  <div className="overflow-auto flex gap-x-8">
                    <img
                      className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${brazalete.photo}`}
                      alt=""
                    />
                    <img
                      className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${brazalete.photo2}`}
                      alt=""
                    />
                    <img
                      className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                      src={`${process.env.REACT_APP_API_URL}${brazalete.photo3}`}
                      alt=""
                    />
                  </div>
                  <div className="mx-8 min-w-0 flex-auto">
                    <h6 className="font-bold">Nombre:</h6>
                    <p className="text-sm leading-5 text-black">
                      {brazalete.name}
                    </p>
                    <h6 className="font-bold"> Precio: </h6>
                    <p className="text-sm leading-5 text-black">
                      {brazalete.precio_unidad}
                    </p>
                    <h6 className="font-bold">Pureza:</h6>
                    <p className="text-sm leading-5 text-black">
                      {brazalete.pureza}
                    </p>
                    <h6 className="font-bold"> Size:</h6>
                    <p className="text-sm leading-5 text-black">
                      {brazalete.size}
                    </p>
                    <h6 className="font-bold">Peso:</h6>
                    <p className="text-sm leading-5 text-black">
                      {brazalete.peso_neto}
                    </p>
                    <h6 className="font-bold"> Genero:</h6>{" "}
                    <p className="text-sm leading-5 text-black">
                      {brazalete.genero_usuario}
                    </p>
                  </div>
                </div>
              </Link>
              {check(brazalete.estado) ? (
                <>
                  <div className="flex items-center">
                    <div className="switch" key={brazalete.id}>
                      <input
                        className="switch-check"
                        id={brazalete.id}
                        type="checkbox"
                        checked={check(brazalete.estado)}
                        onChange={handleChange}
                      />
                      <label className="switch-label" htmlFor={brazalete.id}>
                        Check
                        <span></span>
                      </label>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center">
                    <div className="switch" key={brazalete.id}>
                      <input
                        className="switch-check"
                        id={brazalete.id}
                        type="checkbox"
                        onChange={handleChange}
                      />
                      <label className="switch-label" htmlFor={brazalete.id}>
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
