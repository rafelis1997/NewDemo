import { Route, Routes } from "react-router-dom";
import MindARViewer from "./components/MindARViewer";
import { ModelViewer } from "./components/ModelViewer";
import { Home } from "./pages/Home";
import { InstructionsImage } from "./pages/InstructionsImage";
import { InstructionsWorld } from "./pages/InstructionsWorld";

export function Router() {
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/instructions-image" element={<InstructionsImage/>}/>
      <Route path="/instructions-world" element={<InstructionsWorld/>}/>
      <Route path="/ar" element={<MindARViewer />} />
      <Route path="/world-ar" element={<ModelViewer />} />
    </Routes>
  )
}