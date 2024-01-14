import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";

const EditUserListing = ({ formikProps, apiStatus, onSubmitHandler }) => {
  console.log(formikProps);
  const { values, setFieldValue, isSubmitting } = formikProps;
  const allHobbies = ["Dancing", "Singing", "Reading", "Teaching"];
  return (
    <div className="">
    <div className="p-4 flex flex-col gap-2  ">
      <div className=" text-black font-bold"></div>

      <div className="pt-1">
        <span className="text-xl font-semibold text-slate-600">
          Edit User
        </span>
      </div>

      <div className="grow max-h-full bg-white border bg-1 rounded shadow  bg-form-bg bg-cover bg-no-repeat">
        <div className="flex justify-between px-3 h-[60px] items-center border-b border-slate-300">
          <div className="text-xl font-medium"> User Details</div>

          <div>
            <button
              type="submit"
              disabled={apiStatus}
              onClick={onSubmitHandler}
              className={`bg-blue-700 rounded py-1 px-5 text-white border border-primary-main ${
                apiStatus ? "opacity-50" : ""
              }`}
            >
              Update
            </button>
          </div>
        </div>
        <div className="grow py-8 px-3 ">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="ml-1 ">
                Name{" "}
              </label>
              <Field 
                type="text"
                name="name"
                placeholder="User name"
                value={values.name}
                onChange={(e) => {
                  console.log(setFieldValue("name", e.target.value));
                  setFieldValue("name", e.target.value);
                  console.log(values); 
                }}
                onBlur={formikProps.handleBlur}
                className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
              />
            <ErrorMessage name="name" component="div" className="text-red-500" />

            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="ml-1">
                Email
              </label>
              <Field 
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
                className="bg-transparent border border-gray-700 rounded-lg py-3 px-4 "
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />

            </div>
            <div className="flex flex-col ">
              <label htmlFor="gender" className="mb-2">
                Gender
              </label>
              <div>
                <Field 
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={values.gender === "male"}
                  onChange={(e) => setFieldValue("gender", e.target.value)}
                  className="mr-2"
                />

                <label htmlFor="male" className="mr-4">
                  Male
                </label>
                <Field 
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={values.gender === "female"}
                  onChange={() => setFieldValue("gender", "female")}
                  className="mr-2"
                />

                <label htmlFor="female">Female</label>
                <ErrorMessage name="gender" component="div" className="text-red-500" />

              </div>
            </div>

            <div className="flex flex-col">
              <label className="ml-1 font-medium mb-2 ">Status </label>

              <select
                name="status"
                className="bg-transparent border border-gray-700 rounded-lg py-3 px-4"
                value={values.status}
                onChange={(e) => setFieldValue("status", e.target.value)}
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <ErrorMessage name="status" component="div" className="text-red-500" />

            </div>

            <div>
              <div className="flex flex-col ">
                <label htmlFor="activities" className="mb-2">
                  Hobbies{" "}
                </label>
                <div className="grid grid-cols-2 gap-4 text-black">
                  {allHobbies.map((hobby) => (
                    <div key={hobby} className="flex flex-row items-center">
                      <input
                        type="checkbox"
                        id={hobby}
                        name="hobbies"
                        value={hobby}
                        checked={values.hobbies.includes(hobby)}
                        onChange={() =>
                          setFieldValue(
                            "hobbies",
                            values.hobbies.includes(hobby)
                              ? values.hobbies.filter((h) => h !== hobby)
                              : [...values.hobbies, hobby]
                          )
                        }
                      />
                      <label htmlFor={hobby} className="ml-2">
                        {hobby}
                      </label>
                    </div>
                  ))}
                </div>
                <ErrorMessage name="hobbies" component="div" className="text-red-500" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EditUserListing;
