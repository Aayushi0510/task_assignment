import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EditUserListing from "./EditUserListing";
import { fetchUserById, updateUser } from "../../../redux/slices/UserSlice";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const EditUser = () => {
  const [apiStatus, setApiStatus] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const Id = params.id;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchUserById(parseInt(Id)));
  }, [dispatch, Id]);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  console.log(selectedUser);
  const initialValues = {
    name: selectedUser?.name || "",
    email: selectedUser?.email || "",
    gender: selectedUser?.gender || "",
    status: selectedUser?.status || "",
    hobbies: selectedUser?.hobbies || "",
  };

  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    status: Yup.string().required("Status is required"),
    hobbies: Yup.array()
      .min(2, "Select at least two hobbies")
      .required("At least two hobbies are required"),
  });


  const onSubmitHandler = async (values) => {
    try {
      dispatch(updateUser({ id: parseInt(Id), updatedUser: values }));

      toast.success("User updated successfully");
      navigate("/users");
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Error updating user");
    }
  };

  if (!selectedUser) {
    return <div>Loading...</div>;
  }
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        return (
          <>
            <Form>
              <EditUserListing
                apiStatus={apiStatus}
                formikProps={formikProps}
              />
            </Form>
          </>
        );
      }}
    </Formik>
  );
};

export default EditUser;
