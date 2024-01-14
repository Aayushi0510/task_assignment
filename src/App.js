import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import Routing from "./Routing";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Routing />
      <Toaster />
    </>
  );
}

export default App;
