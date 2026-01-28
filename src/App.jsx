import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import NoiseOverlay from "./components/layout/NoiseOverlay"
import AppRoutes from "./routes/AppRoutes"

export default function App() {
  return (
    <BrowserRouter>
      <NoiseOverlay />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
