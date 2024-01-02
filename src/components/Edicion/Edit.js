import { connect } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, Fragment } from "react";

function Edit({ prod, Prod, element }) {
  //const
  const params = useParams();
  const id = params.id;
  const [updateName, setUpdateName] = useState(false);
  const [updatePrecio, setUpdatePrecio] = useState(false);
  const [updatePureza, setUpdatePureza] = useState(false);
  const [updateSize, setUpdateSize] = useState(false);
  const [updatePeso, setUpdatePeso] = useState(false);
  const [updateGenero, setUpdateGenero] = useState(false);
  const [updatePhoto, setUpdatePhoto] = useState(false);
  const [updatePhoto2, setUpdatePhoto2] = useState(false);
  const [updatePhoto3, setUpdatePhoto3] = useState(false);
  const [photo, setPhoto] = useState();
  const [photo2, setPhoto2] = useState();
  const [photo3, setPhoto3] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [previewImage2, setPreviewImage2] = useState();
  const [previewImage3, setPreviewImage3] = useState();
  const [, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    precio_unidad: "",
    pureza: "",
    size: "",
    peso_neto: "",
    genero_usuario: "",
  });
  const { name, precio_unidad, pureza, size, peso_neto, genero_usuario } =
    formData;

  //functions

  const fileSelectedHandler = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setPreviewImage(reader.result);
    };
    setPhoto(file);
  };
  const fileSelectedHandler2 = (e) => {
    const file2 = e.target.files[0];
    let reader2 = new FileReader();
    reader2.readAsDataURL(file2);
    reader2.onloadend = (e) => {
      setPreviewImage2(reader2.result);
    };
    setPhoto2(file2);
  };
  const fileSelectedHandler3 = (e) => {
    const file3 = e.target.files[0];
    let reader3 = new FileReader();
    reader3.readAsDataURL(file3);
    reader3.onloadend = (e) => {
      setPreviewImage3(reader3.result);
    };
    setPhoto3(file3);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    };
    const formData = new FormData();
    formData.append("id", id);
    formData.append("name", name);
    formData.append("precio_unidad", precio_unidad);
    formData.append("pureza", pureza);
    formData.append("size", size);
    formData.append("peso_neto", peso_neto);
    formData.append("genero_usuario", genero_usuario);
    if (photo) {
      formData.append("photo", photo, photo.name);
    } else {
      formData.append("photo", "");
    }
    if (photo2) {
      formData.append("photo2", photo2, photo2.name);
    } else {
      formData.append("photo2", "");
    }
    if (photo3) {
      formData.append("photo3", photo3, photo3.name);
    } else {
      formData.append("photo3", "");
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/app/Edit${Prod}`,
          formData,
          config
        );
        if (res.status === 200) {
          setLoading(false);
          setUpdateName(false);
          setUpdatePrecio(false);
          setUpdatePureza(false);
          setUpdateSize(false);
          setUpdatePeso(false);
          setUpdateGenero(false);
          setUpdatePhoto(false);
          setUpdatePhoto2(false);
          setUpdatePhoto3(false);
          element(id);
        } else {
          setLoading(false);
          setUpdateName(false);
          setUpdatePrecio(false);
          setUpdatePureza(false);
          setUpdateSize(false);
          setUpdatePeso(false);
          setUpdateGenero(false);
          setUpdatePhoto(false);
          setUpdatePhoto2(false);
          setUpdatePhoto3(false);
        }
      } catch (error) {
        setLoading(false);
        setUpdateName(false);
        setUpdatePrecio(false);
        setUpdatePureza(false);
        setUpdateSize(false);
        setUpdatePeso(false);
        setUpdateGenero(false);
        setUpdatePhoto(false);
        setUpdatePhoto2(false);
        setUpdatePhoto3(false);
        alert("error al enviar");
      }
    };
    fetchData();
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //
  //
  //

  return (
    <>
      <dl className="ml-5 divide-y px-5 divide-gray-200">
        {/* Nombre */}
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">Nombre</dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updateName ? (
              <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                <span className="flex-grow">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => onChange(e)}
                    required
                    placeholder=" Name"
                    className="w-full py-2 bg-white border border-gray-200 rounded-md"
                  />
                </span>
                <span className="ml-4 flex-shrink-0">
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Save
                    </button>
                  </span>
                  <div
                    type="button"
                    onClick={() => setUpdateName(false)}
                    className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Cancel
                  </div>
                </span>
              </form>
            ) : (
              <>
                <span className="flex-grow">{prod.name}</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdateName(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
        {/* Precio */}
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">Precio</dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updatePrecio ? (
              <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                <span className="flex-grow">
                  <input
                    type="number"
                    name="precio_unidad"
                    value={precio_unidad}
                    onChange={(e) => onChange(e)}
                    required
                    placeholder=" Precio"
                    className="w-full py-2 bg-white border border-gray-200 rounded-md"
                  />
                </span>
                <span className="ml-4 flex-shrink-0">
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Save
                    </button>
                  </span>
                  <div
                    type="button"
                    onClick={() => setUpdatePrecio(false)}
                    className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Cancel
                  </div>
                </span>
              </form>
            ) : (
              <>
                <span className="flex-grow">{prod.precio_unidad}</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdatePrecio(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
        {/* Pureza */}
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">Pureza</dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updatePureza ? (
              <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                <span className="flex-grow">
                  <input
                    type="text"
                    name="pureza"
                    value={pureza}
                    onChange={(e) => onChange(e)}
                    required
                    placeholder=" Pureza"
                    className="w-full py-2 bg-white border border-gray-200 rounded-md"
                  />
                </span>
                <span className="ml-4 flex-shrink-0">
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Save
                    </button>
                  </span>
                  <div
                    type="button"
                    onClick={() => setUpdatePureza(false)}
                    className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Cancel
                  </div>
                </span>
              </form>
            ) : (
              <>
                <span className="flex-grow">{prod.pureza}</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdatePureza(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
        {/* Size */}
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">Size</dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updateSize ? (
              <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                <span className="flex-grow">
                  <input
                    type="text"
                    name="size"
                    value={size}
                    onChange={(e) => onChange(e)}
                    required
                    placeholder=" Size"
                    className="w-full py-2 bg-white border border-gray-200 rounded-md"
                  />
                </span>
                <span className="ml-4 flex-shrink-0">
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Save
                    </button>
                  </span>
                  <div
                    type="button"
                    onClick={() => setUpdateSize(false)}
                    className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Cancel
                  </div>
                </span>
              </form>
            ) : (
              <>
                <span className="flex-grow">{prod.size}</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdateSize(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
        {/* Peso */}
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">Peso</dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updatePeso ? (
              <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                <span className="flex-grow">
                  <input
                    type="text"
                    name="peso_neto"
                    value={peso_neto}
                    onChange={(e) => onChange(e)}
                    required
                    placeholder=" Peso"
                    className="w-full py-2 bg-white border border-gray-200 rounded-md"
                  />
                </span>
                <span className="ml-4 flex-shrink-0">
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Save
                    </button>
                  </span>
                  <div
                    type="button"
                    onClick={() => setUpdatePeso(false)}
                    className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Cancel
                  </div>
                </span>
              </form>
            ) : (
              <>
                <span className="flex-grow">{prod.peso_neto}</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdatePeso(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
        {/* Genero de Usuario */}
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">Genero</dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updateGenero ? (
              <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                <span className="flex-grow">
                  <select
                    type="text"
                    name="genero_usuario"
                    value={genero_usuario}
                    onChange={(e) => onChange(e)}
                    required
                    className="w-full py-2 bg-white border border-gray-200 rounded-md">
                    <option defaultValue></option>
                    <option className="text-black">Unisex</option>
                    <option className="text-black">Female</option>
                    <option className="text-black">Male</option>
                  </select>
                </span>
                <span className="ml-4 flex-shrink-0">
                  <span className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Save
                    </button>
                  </span>
                  <div
                    type="button"
                    onClick={() => setUpdateGenero(false)}
                    className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Cancel
                  </div>
                </span>
              </form>
            ) : (
              <>
                <span className="flex-grow">{prod.genero_usuario}</span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdateGenero(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
        {/*
              ///////
              */}
        {/* Imagenes */}
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">
            Imagen Principal
          </dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updatePhoto ? (
              <>
                {previewImage && (
                  <img
                    src={previewImage}
                    alt=""
                    className="w-[150px] h-[150px] me-4"
                  />
                )}
                <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                  <span className="flex-grow">
                    <input
                      type="file"
                      required
                      name="photo"
                      onChange={(e) => fileSelectedHandler(e)}
                      className="w-full py-2 bg-white border border-gray-200 rounded-md"
                    />
                  </span>

                  <span className="ml-4 flex-shrink-0">
                    <span className="ml-4 flex-shrink-0">
                      <button
                        type="submit"
                        className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                        Save
                      </button>
                    </span>
                    <div
                      type="button"
                      onClick={() => {
                        setUpdatePhoto(false);
                        setPhoto(null);
                        setPreviewImage(null);
                      }}
                      className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Cancel
                    </div>
                  </span>
                </form>
              </>
            ) : (
              <>
                <span className="flex-grow">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${prod.photo}`}
                    alt=""
                    className="w-[200px] h-[150px]"
                  />
                </span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdatePhoto(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">
            Imagen Secundaria1
          </dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updatePhoto2 ? (
              <>
                {previewImage2 && (
                  <img
                    src={previewImage2}
                    alt=""
                    className="w-[150px] h-[150px] me-4"
                  />
                )}
                <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                  <span className="flex-grow">
                    <input
                      type="file"
                      required
                      name="photo2"
                      onChange={(e) => fileSelectedHandler2(e)}
                      className="w-full py-2 bg-white border border-gray-200 rounded-md"
                    />
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    <span className="ml-4 flex-shrink-0">
                      <button
                        type="submit"
                        className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                        Save
                      </button>
                    </span>
                    <div
                      type="button"
                      onClick={() => {
                        setUpdatePhoto2(false);
                        setPhoto2(null);
                        setPreviewImage2(null);
                      }}
                      className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Cancel
                    </div>
                  </span>
                </form>
              </>
            ) : (
              <>
                <span className="flex-grow">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${prod.photo2}`}
                    alt=""
                    className="w-[200px] h-[150px]"
                  />
                </span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdatePhoto2(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
        <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
          <dt className="text-sm font-medium text-gray-500">
            Imagen Secundaria2
          </dt>
          <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            {updatePhoto3 ? (
              <>
                {previewImage3 && (
                  <img
                    src={previewImage3}
                    alt=""
                    className="w-[150px] h-[150px] me-4"
                  />
                )}
                <form onSubmit={(e) => onSubmit(e)} className="flex w-full">
                  <span className="flex-grow">
                    <input
                      type="file"
                      required
                      name="photo3"
                      onChange={(e) => fileSelectedHandler3(e)}
                      className="w-full py-2 bg-white border border-gray-200 rounded-md"
                    />
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    <span className="ml-4 flex-shrink-0">
                      <button
                        type="submit"
                        className="inline-flex items-center bg-emerald-950 text-emerald-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                        <span className="bg-emerald-400 shadow-emerald-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                        Save
                      </button>
                    </span>
                    <div
                      type="button"
                      onClick={() => {
                        setUpdatePhoto3(false);
                        setPhoto3(null);
                        setPreviewImage3(null);
                      }}
                      className="cursor-pointer ml-5 inline-flex items-center bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                      <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      Cancel
                    </div>
                  </span>
                </form>
              </>
            ) : (
              <>
                <span className="flex-grow">
                  <img
                    src={`${process.env.REACT_APP_API_URL}${prod.photo3}`}
                    alt=""
                    className="w-[200px] h-[150px]"
                  />
                </span>
                <span className="ml-4 flex-shrink-0">
                  <button
                    onClick={() => setUpdatePhoto3(true)}
                    className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Update
                  </button>
                </span>
              </>
            )}
          </dd>
        </div>
      </dl>
    </>
  );
}

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps, {})(Edit);
