import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../redux/slices/AuthSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {isAuthenticated}=useSelector((state)=>state.auth)
  console.log(isAuthenticated)
  const {user}=useSelector((state)=>state.auth)
console.log(user)
  const handleLogout = () => {
    dispatch(logout())
    navigate("/");
  };

  return (
    <div className="flex  items-center justify-end py-3 w-full h-full  px-4">
      <div className="flex gap-4  justify-end items-center px-4 ">
        {!user ? (
          <button                   

            className="relative bg-primary-main  text-white transition-all duration-[800ms]
                 hover:bg-slate-200 text-sm rounded py-2 px-3"
            onClick={() => {
              navigate("/");
            }}
          >
            Login
          </button>
        ) : (
          <>
            <button className="flex gap-5">
           
            </button>
            <button
              className="relative bg-blue-600 text-lg text-white transition-all duration-[800ms]
                 hover:bg-slate-200 px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
