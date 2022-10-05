import { Route, Routes } from "react-router-dom";
import MindARViewer from "./components/MindARViewer";
import { ModelViewer } from "./components/ModelViewer";
import { Home } from "./pages/Home";
import { Instructions } from "./pages/Instructions";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/instructions" element={<Instructions/>}/>
      <Route path="/ar" element={<MindARViewer />} />
      <Route path="/world-ar" element={<ModelViewer />} />
    </Routes>
  )
}