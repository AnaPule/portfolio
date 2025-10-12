
import './App.css'

//components
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'


function App() {

  return (
    <>
      <div className='w-full h-screen text-black font-sans overflow-auto'>
        <Header />
        <Hero />
        <About />

        <section className="max-md:p-0 py-0 flex items-center justify-center overflow-hidden">
          <Skills />
        </section>

        <Projects />
        <Contact />
        <Footer />
      </div>
      {/*
    <MotionConfig>
        <div className="min-h-screen bg-white text-black font-sans">
          <Header />
          <main className="snap-y snap-mandatory overflow-y-scroll">
            <Hero />

            <section className="min-h-screen snap-start flex items-center px-4 md:px-9 gap-8 overflow-hidden">
              <div className="flex-1 min-w-0">
                <Skills />
              </div>

              <div className="flex-1 min-w-0 text-center flex items-center justify-center p-8">
                <p className="text-lg md:text-xl leading-relaxed">
                  This section is a description of the technical skills that I offer to the client as a software developer/engineer or service provider.
                </p>
              </div>
            </section>

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
