import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Contact from './components/Contact'
export default function App() {
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>

    </main>
  )
}