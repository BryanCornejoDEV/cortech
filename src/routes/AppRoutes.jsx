import { Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing"
import Catalogo from "../pages/Catalogo"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/catalogo" element={<Catalogo />} />
    </Routes>
  )
}
