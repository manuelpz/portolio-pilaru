import { metadata } from './layout'
import About from './about/page'
require('dotenv').config()

const Home = () => {
  metadata.title = 'Inicio'
  return <About />
}
export default Home
