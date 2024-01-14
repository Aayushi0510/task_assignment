import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/slices/AuthSlice";

import loginimg from "../assets/image/login.jpg";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      const userCredentials = { email: "admin@gmail.com", password: "Admin" };

      try {
        if (
          values.email === userCredentials.email &&
          values.password === userCredentials.password
        ) {
          dispatch(loginSuccess(userCredentials));
          navigate("/dashboard");
        } else {
          setStatus("Invalid email or password");
        }
      } catch (error) {
        console.error("Login failed:", error);
        setStatus("An error occurred while logging in");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <div className="h-screen w-screen flex md:flex-row">
        <div className="flex flex-col h-full w-full relative justify-center items-center flex-1">
          <div className="flex justify-end absolute top-10 right-4 w-full p-2"></div>
          <div className="text-2xl font-semibold text-center">Sign in</div>
          <form
            className="space-y-6 mt-4"
            onSubmit={formik.handleSubmit}
            noValidate
          >
            {formik.status && (
              <div className="text-red-500 text-sm mb-4">{formik.status}</div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 mb-2 text-gray-900"
              >
                Email
              </label>
              <div className="w-[450px]">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...formik.getFieldProps("email")}
                  className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 mb-2 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  {...formik.getFieldProps("password")}
                  className="px-4 py-3 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {formik.isSubmitting ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-slate-400 flex-1 hidden md:block">
          <div className="h-full">
            <img src={loginimg} className="h-full w-full" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
