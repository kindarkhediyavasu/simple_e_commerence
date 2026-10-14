import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App(){
  return <>
    <Header></Header>
    <Outlet/>
    <Footer/>
  </>
}
export default App;