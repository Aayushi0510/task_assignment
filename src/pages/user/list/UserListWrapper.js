import React from "react";
import CourseList from "./UserList";
import { FaPencil } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import ShowDialogBox from "../../../components/ShowDialogBox/ShowDialogBox";
import { useDispatch, useSelector } from "react-redux";
import UserList from "./UserList";
import { deleteUser } from "../../../redux/slices/UserSlice";

const UserListWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  console.log(userData);

  const columns = [
    {
      field: "UserName",
      headerName: "User Name",
      flex: "flex-[1_1_0%]",
      renderCell: (row) => <span> {row.name} </span>,
    },
    {
      field: "email",
      headerName: "Email",
      flex: "flex-[1.5_1.5_0%]",
      renderCell: (row) => {
        return <span> {row.email} </span>;
      },
    },
    {
      field: "status",
      headerName: "Status",
      flex: "flex-[1_1_0%]",
      renderCell: (row) => {
        return <span> {row.status} </span>;
      },
    },
    {
      field: "gender",
      headerName: "Gender",
      flex: "flex-[1_1_0%]",
      renderCell: (row) => {
        return <span> {row.gender} </span>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: "flex-[0.5_0.5_0%]",
      renderCell: (row) => (
        <>
          <FaPencil
            onClick={() => handleEdit(row)}
            style={{ cursor: "pointer", marginRight: "8px" }}
          />
          <FaTrashAlt
            onClick={() => handleDelete(row)}
            style={{ cursor: "pointer", marginRight: "8px" }}
          />
        </>
      ),
      align: "end",
    },
  ];

  const handleEdit = (row) => {
    navigate(`edit/${row.id}`);
  };

  const handleDelete = async (row) => {
    try {
      const result = await ShowDialogBox({
        title: "Delete Item",
        text: "Are you sure you want to delete this item?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel",
      });
        if (result.isConfirmed) {
        dispatch(deleteUser(row.id));
  
     
      }
    } catch (error) {
      console.error("Error deleting user:", error);
        ShowDialogBox({
        title: "Error",
        text: "An error occurred while deleting the item.",
        icon: "error",
      });
    }
  };

  return <UserList rows={userData} columns={columns} />;
};

export default UserListWrapper;
