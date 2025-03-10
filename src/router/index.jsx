import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Music from "../components/pages/Music";
import Notes from "../components/pages/Notes";
import LandingPage from "../components/pages/LandingPage";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/music" element={<Music/>} />
      <Route path="/notes" element={<Notes/>} />
    </Routes>
  )
}
