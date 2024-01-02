import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Anillos from "containers/pages/Productos/Anillos/Anillos";
import Aretes from "containers/pages/Productos/Aretes/Aretes";
import Brazaletes from "containers/pages/Productos/Brazaletes/Brazaletes";
import Cadenas from "containers/pages/Productos/Cadenas/Cadenas";
import Dijes from "containers/pages/Productos/Dijes/Dijes";
import Pircings from "containers/pages/Productos/Pircings/Pircings";
import Tobilleras from "containers/pages/Productos/Tobilleras/Tobilleras";
import Dashboard from "containers/pages/Dashboard";
import EditAn from "containers/pages/Productos/Anillos/EditAn";
import EditAr from "containers/pages/Productos/Aretes/EditAr";
import EditBr from "containers/pages/Productos/Brazaletes/EditBr";
import EditCa from "containers/pages/Productos/Cadenas/EditCa";
import EditDi from "containers/pages/Productos/Dijes/EditDi";
import EditPi from "containers/pages/Productos/Pircings/EditPi";
import EditTo from "containers/pages/Productos/Tobilleras/EditTo";
import SerchAn from "containers/pages/Productos/Anillos/SerchAn";
import SerchAr from "containers/pages/Productos/Aretes/SerchAr";
import SerchBr from "containers/pages/Productos/Brazaletes/SerchBr";
import SerchCa from "containers/pages/Productos/Cadenas/SerchCa";
import SerchDi from "containers/pages/Productos/Dijes/SerchDi";
import SerchPi from "containers/pages/Productos/Pircings/SerchPi";
import ResetPassword from "containers/auth/ResetPassword";
import ResetPasswordConfirm from "containers/auth/ResetPasswordConfirm";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/*Error Display*/}
        <Route path="*" element={<Error404 />} />

        {/*Home Display*/}
        <Route path="/" element={<Home />} />
        {/*Home Display*/}
        <Route path="/forgot_password" element={<ResetPassword />} />

        <Route
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />

        {/*Dashboard Display*/}
        <Route path="/Dashboard" element={<Dashboard />} />

        {/*Anillos Display*/}
        <Route path="/Anillos" element={<Anillos />} />
        <Route path="/Anillos/Search/:searchTerm" element={<SerchAn />} />
        <Route path="/Anillos/EditAn/:id" element={<EditAn />} />

        {/*Aretes Display*/}
        <Route path="/Aretes" element={<Aretes />} />
        <Route path="/Aretes/Search/:searchTerm" element={<SerchAr />} />
        <Route path="/Aretes/EditAr/:id" element={<EditAr />} />

        {/*Brazaletes Display*/}
        <Route path="/Brazaletes" element={<Brazaletes />} />
        <Route path="/Brazaletes/Search/:searchTerm" element={<SerchBr />} />
        <Route path="/Brazaletes/EditBr/:id" element={<EditBr />} />

        {/*Cadenas Display*/}
        <Route path="/Cadenas" element={<Cadenas />} />
        <Route path="/Cadenas/Search/:searchTerm" element={<SerchCa />} />
        <Route path="/Cadenas/EditCa/:id" element={<EditCa />} />

        {/*Dijes Display*/}
        <Route path="/Dijes" element={<Dijes />} />
        <Route path="/Dijes/Search/:searchTerm" element={<SerchDi />} />
        <Route path="/Dijes/EditDi/:id" element={<EditDi />} />

        {/*Pircings Display*/}
        <Route path="/Pircings" element={<Pircings />} />
        <Route path="/Pircings/Search/:searchTerm" element={<SerchPi />} />
        <Route path="/Pircings/EditPi/:id" element={<EditPi />} />

        {/*Tobilleras Display*/}
        <Route path="/Tobilleras" element={<Tobilleras />} />
        <Route path="/Tobilleras/Search/:searchTerm" element={<SerchPi />} />
        <Route path="/Tobilleras/EditTo/:id" element={<EditTo />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
