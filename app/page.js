import { metadata } from "./layout"
import About from "./about/page"
import dotenv from "dotenv"
dotenv.config()
const Home = () => {
  metadata.title = "Inicio"
  return (
    <About />
  )
}
export default Home
