import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  check_autenticated,
  load_user,
  reset_password_confirm,
  refresh,
} from "redux/actions/auth/auth";
import "styles/home.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { HomeImg, Logo } from "components/img/Images";

const ResetPasswordConfirm = ({
  reset_password_confirm,
  isAuthenticated,
  loading,
  check_autenticated,
  refresh,
  load_user,
}) => {
  const params = useParams();
  const uid = params.uid;
  const token = params.token;

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
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password_confirm(uid, token, new_password, re_new_password);
    navigate("/");
  };
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/Dashboard" />;
  }

  return (
    <div
      style={{ backgroundImage: `url(${HomeImg})` }}
      className=" w-screen bg-cover bg-center h-screen flex justify-center items-center ">
      <div
        className=" w-96 h-[450px] bg-transparent  border rounded-lg border-gray-600 flex  flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24 w-auto"
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
                  id="new_password"
                  name="new_password"
                  type="password"
                  value={new_password}
                  onChange={(e) => onChange(e)}
                  required
                  className="rounded-md h-9"
                />
                <span>New Password</span>
              </label>
              <label>
                <input
                  id="re_new_password"
                  name="re_new_password"
                  type="password"
                  value={re_new_password}
                  onChange={(e) => onChange(e)}
                  required
                  className="rounded-md h-9"
                />
                <span>Repeat New Password</span>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="bg-gradient-to-br from-purple-400 to-yellow-400 w-full text-black px-2 py-1.5 font-bold rounded-md hover:opacity-80">
                Change Password
              </button>
            </div>
          </form>
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
  reset_password_confirm,
  check_autenticated,
  refresh,
  load_user,
})(ResetPasswordConfirm);
