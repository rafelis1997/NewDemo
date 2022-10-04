import { Route, Routes } from "react-router-dom";
import MindARViewer from "./components/MindARViewer";
import { Home } from "./pages/Home";
import { Instructions } from "./pages/Instructions";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/instructions" element={<Instructions/>}/>
      <Route path="/ar" element={<MindARViewer />} />
    </Routes>
  )
}