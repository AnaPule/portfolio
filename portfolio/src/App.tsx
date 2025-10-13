
import './App.css'

//components
import New from './components/new'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'

import { MotionConfig } from 'framer-motion'

function App() {

  return (
    <>
      
      <div className='w-full h-screen text-black font-sans overflow-auto'>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      {/*
      <MotionConfig>
        <div className="min-h-screen bg-white text-black font-sans">
          <Header />
          <main className="overflow-y-scroll">
            <Hero />
            <About />
            <New />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </main>
        </div>
      </MotionConfig>
*/}

    </>
  )
}

export default App
