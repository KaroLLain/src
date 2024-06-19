import "./index.css";
import PixelVenturesContainer from "./PixelVenturesContainer/PixelVentureContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PixelVenturesContainer />
    </div>
  );
}
