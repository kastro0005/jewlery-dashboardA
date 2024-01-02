import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  check_autenticated,
  load_user,
  refresh,
  reset_password,
} from "redux/actions/auth/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import "styles/home.css";
import { HomeImg, Logo } from "components/img/Images";

const ResetPassword = ({
  reset_password,
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
        {check_autenticated()}
        {refresh()}
        {load_user()}
      </>
    );
  }, [isAuthenticated, check_autenticated, refresh, load_user]);

  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    navigate("/");
  };

  if (isAuthenticated) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <div
      style={{ backgroundImage: `url(${HomeImg})` }}
      className=" w-screen bg-cover bg-center h-screen flex justify-center items-center ">
      <div
        className=" w-96 h-[350px] bg-transparent  border rounded-lg border-gray-600 flex  flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
            src={Logo}
            alt="Your Company"
          />
        </div>

        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-sm">
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
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-br from-purple-400 to-yellow-400 w-full text-black px-2 py-1.5 font-bold rounded-md hover:opacity-80">
                  <EnvelopeIcon className="h-5 w-5 text-black" aria-hidden />
                
                Send Email
              </button>
            </div>
          </form>
          <div className="flex flex-col gap-1">
            <div className="text-lg font-light">
              <span className="">Already have and account? </span>
              <Link to="/" className="font-bold text-black">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});
export default connect(mapStateToProps, {
  reset_password,
  check_autenticated,
  refresh,
  load_user,
})(ResetPassword);
