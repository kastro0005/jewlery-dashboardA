import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  check_autenticated,
  load_user,
  login,
  refresh,
} from "redux/actions/auth/auth";
import {Link, Navigate } from "react-router-dom";
import "styles/home.css";
import { motion } from "framer-motion";
import { HomeImg, Logo } from "components/img/Images";

const Home = ({
  login,
  isAuthenticated,
  loading,
  check_autenticated,
  refresh,
  load_user,
}) => {
  useEffect(() => {
    isAuthenticated ? (
      <></>
    ) : (
      <>
        {refresh()}
        {check_autenticated()}
        {load_user()}
      </>
    );
  }, [isAuthenticated, check_autenticated, refresh, load_user]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const [activate, setActivate] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ backgroundImage: `url(${HomeImg})` }}
      className=" w-screen bg-cover bg-center h-screen flex justify-center items-center ">
      {activate ? (
        <div
          className="bg-transparent  shadow-xl  shadow-slate-900 w-96 h-[450px] bg-center  border rounded-lg border-gray-600 flex  flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className=" mx-auto h-24 w-auto"
              src={Logo}
              alt="Your Company"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={(e) => {
                onSubmit(e);
              }}
              className="space-y-6 content__form"
              action="#"
              method="POST">
              <div className="content__inputs">
                <label>
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => onChange(e)}
                    type="text"
                    required
                    className="rounded-md h-9"
                  />
                  <span>Email Address</span>
                </label>
                <label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                    className="rounded-md h-9"
                  />
                  <span>Password</span>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-gradient-to-br from-purple-400 to-yellow-400 w-full text-black px-2 py-1.5 font-bold rounded-md hover:opacity-80"
                  type="submit">
                  Sign in
                </button>
              </div>
              <div className="text-sm  flex justify-center">
                <Link
                  to="/forgot_password"
                  className="font-semibold text-black">
                  Forgot password?
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <button
            className="hover:-translate-y-1 hover:scale-110 transition delay-100 duration-200 ease-in-out  -m-1.5 p-1.5"
            onClick={() => setActivate(true)}>
            <span className="sr-only">Yani's Jewlery</span>
            <img
              src={Logo}
              alt=""
              className="logo"
              width={600}
              height={600}
            />
        </button>
      )}
    </motion.div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {
  login,
  check_autenticated,
  refresh,
  load_user,
})(Home);
