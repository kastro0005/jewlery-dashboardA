import { connect } from "react-redux";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "styles/index.css";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

function List({ prod, Prod, Prods, Pr }) {
  const [publico, setPublico] = useState(false);
  const [privado, setPrivado] = useState(false);
  const [fail, setFail] = useState(false);

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
          `${process.env.REACT_APP_API_URL}/app/Edit${Prod}Private`,
          formData,
          config
        );
        if (res.status === 200) {
          setPrivado(true);
        } else {
          setFail(true);
        }
      } catch (error) {
        setFail(true);
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
          `${process.env.REACT_APP_API_URL}/app/Edit${Prod}Public`,
          formData,
          config
        );
        if (res.status === 200) {
          setPublico(true);
        } else {
          setFail(true);
        }
      } catch (error) {
        setFail(true);
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
    <>
      <div className="ml-5 overflow-hidden bg-white sm:rounded-md">
        <ul className="divide-y divide-gray-300">
          {prod &&
            prod.map((item) => (
              <li
                key={item.id}
                className=" flex justify-start gap-20 py-5  hover:bg-slate-200 ">
                <Link to={`/${Prods}/Edit${Pr}/${item.id}`}>
                  <div className="mx-5 flex gap-8 min-w-0 overflow-auto">
                    <div className="overflow-auto flex gap-8">
                      <img
                        className="object-cover h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                        src={`${process.env.REACT_APP_API_URL}${item.photo}`}
                        alt=""
                      />
                      <img
                        className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                        src={`${process.env.REACT_APP_API_URL}${item.photo2}`}
                        alt=""
                      />
                      <img
                        className="h-[200px] w-[200px] flex-none rounded-lg bg-gray-50"
                        src={`${process.env.REACT_APP_API_URL}${item.photo3}`}
                        alt=""
                      />
                    </div>
                    <div className="mx-8 min-w-10 flex gap-8 overflow-auto">
                      <div>
                        <h6 className="font-bold">Nombre:</h6>
                        <p className="text-sm leading-5 text-black">
                          {item.name}
                        </p>
                        <h6 className="font-bold">Precio:</h6>{" "}
                        <p className="text-sm leading-5 text-black">
                          {item.precio_unidad}
                        </p>
                        <h6 className="font-bold">Pureza:</h6>
                        <p className="text-sm leading-5 text-black">
                          {item.pureza}
                        </p>
                        <h6 className="font-bold">Size:</h6>
                        <p className="text-sm leading-5 text-black">
                          {item.size}
                        </p>
                        <h6 className="font-bold">Peso:</h6>
                        <p className="text-sm leading-5 text-black">
                          {item.peso_neto}
                        </p>
                        <h6 className="font-bold">Genero:</h6>{" "}
                        <p className="text-sm leading-5 text-black">
                          {item.genero_usuario}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                {check(item.estado) ? (
                  <>
                    <div className="flex items-center">
                      <div className="switch" key={item.id}>
                        <input
                          className="switch-check"
                          id={item.id}
                          type="checkbox"
                          checked={check(item.estado)}
                          onChange={handleChange}
                        />
                        <label className="switch-label" htmlFor={item.id}>
                          Check
                          <span></span>
                        </label>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center">
                      <div className="switch" key={item.id}>
                        <input
                          className="switch-check"
                          id={item.id}
                          type="checkbox"
                          onChange={handleChange}
                        />
                        <label className="switch-label" htmlFor={item.id}>
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

      <Transition.Root show={publico} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setPublico}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 ">
                        <CheckIcon
                          className="h-6 w-6 text-green-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center ">
                        <Dialog.Title
                          as="h3"
                          className="text-xl font-semibold leading-6 text-gray-900">
                          Success!!
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            El anillo ha sido publicado exitosamente.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        setPublico(false);
                      }}
                      className="flex items-center bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={privado} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setPrivado}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 ">
                        <CheckIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center ">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900">
                          Success!!
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            El anillo ha sido puesto en privado.
                          </p>
                          <p className="text-sm text-gray-500">
                            Ya puede ser editado.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        setPrivado(false);
                      }}
                      className="ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={fail} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setFail}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 ">
                        <XMarkIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center ">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900">
                          Fail
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Revise si se encuentra autenticado.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setFail(false)}
                      className="ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(List);
