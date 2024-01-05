import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "styles/serch.css";
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

function Header({ Element, list }) {
  const Navigate = useNavigate();
  const [ok, setOk] = useState(false);
  const [fail, setFail] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  function Go() {
    Navigate(`/${Element}s/Search/${searchValue}`);
  }

  return (
    <div className="border-b  border-gray-200 px-4 pt-8 sm:px-6 -ml-4 -mt-4 flex flex-wrap items-center justify-between ">
      <div className="ml-4 mt-4">
        <h3 className="text-5xl font-serif leading-6 text-gray-900">
          {Element}
        </h3>
        <p className="mt-3 text-lg text-gray-500 font-semibold">
          Añade o edita un nuevo {Element}
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <Link
            to={`${process.env.REACT_APP_API_URL}/${Element}s`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Ver
          </Link>
        </div>
        <div className="">
          <button
            onClick={() => {
              const config = {
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                  Authorization: `JWT ${localStorage.getItem("access")}`,
                },
              };
              const body = JSON.stringify({});
              const fetchData = async () => {
                try {
                  const res = await axios.post(
                    `${process.env.REACT_APP_API_URL}/app/Create${Element}`,
                    body,
                    config
                  );
                  if (res.status === 200) {
                    list();
                    setOk(true);
                  } else {
                  }
                } catch (error) {
                  setFail(true);
                }
              };
              fetchData();
            }}
            className="bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            Crear
          </button>
        </div>
        <div className="relative col-span-3 flex">
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            className=" block px-3 w-56 rounded-l-xl border border-neutral-300 bg-transparent py-0 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
          />
          {searchValue.length === 0 && (
            <i className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </i>
          )}
          <div className="inset-y-1 right-1 flex justify-end">
            <button
              type="submit"
              aria-label="Submit"
              className="flex px-3 aspect-square w-full h-full items-center justify-center rounded-r-xl bg-neutral-950 text-white border-l border-neutral-300 transition hover:bg-neutral-800"
              onClick={Go}>
              <svg viewBox="0 0 16 6" aria-hidden="true" className="w-4">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Sale en caso de se envie */}
      <Transition.Root show={ok} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOk}>
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
                            Producto creado.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => {
                        setOk(false);
                      }}
                      className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      {/* Sale en caso de que falle el envio */}
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
                            Verifica si sigues autenticado.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <div
                      type="button"
                      onClick={() => setFail(false)}
                      className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-2 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Ok
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default Header;
