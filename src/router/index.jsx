import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Music from "../components/pages/Music";
import Notes from "../components/pages/Notes";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/music" element={<Music/>} />
      <Route path="/notes" element={<Notes/>} />
    </Routes>
  )
}
