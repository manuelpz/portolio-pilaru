import { metadata } from "./layout"
import About from "./about/page"
const Home = () => {
  metadata.title = "Inicio"
  return (
    <About />
  )
}
export default Home
