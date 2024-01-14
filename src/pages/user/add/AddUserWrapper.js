import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Formik, Form } from "formik";
import {  useNavigate } from "react-router-dom";
import AddUserListing from "./AddUserListing";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/slices/UserSlice";

const AddUserWrapper = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [apiStatus, setApiStatus] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    status: Yup.string().required("Status is required"),
    hobbies: Yup.array()
      .min(2, "Select at least two hobbies")
      .required("At least two hobbies are required"),
  });


  const initialValues = {
    name: "",
    email: "",
    gender: "",
    status: "",
    hobbies: [],
  };

  const onSubmitHandler = (values) => {
    try {
      console.log(values)
      const newId = Math.floor(Math.random() * 1000); 
      const userWithId = { ...values, id: newId };
      dispatch(addUser(userWithId));
      toast.success("User added successfully");
      navigate("/users"); 
    } catch (error) {
      console.error("Error adding user:", error);
      toast.error("Error adding user");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={validationSchema}
      validateOnBlur={false}  

    >
      {(formikProps) => {
        return (
          <Form>
            <AddUserListing apiStatus={apiStatus} formikProps={formikProps} />
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddUserWrapper;
