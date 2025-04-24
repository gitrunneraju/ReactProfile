import About from "./components/About"
import Contact from "./components/Contacts"
import Education from "./components/Education"
import Extracurricular from "./components/Extracurricular"
import Header from "./components/header"
import Hobbies from "./components/Hobbies"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <>
    <div className="bg-gray-100 px-3 py-8">
      <div className="bg-white max-w-2xl mx-auto rounded-xl shadow-xl">
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Hobbies />
      <Extracurricular />
      <Contact />
      <br />
      </div>
    </div>
    </>
  )
}

export default App
