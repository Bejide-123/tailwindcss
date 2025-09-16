import React from 'react'
import 'animate.css';
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonial from './Components/Testimonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import FadeInSection from './Components/FadeInSection';

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Header />

      <FadeInSection>
        <About />
      </FadeInSection>

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <Testimonial />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </div>
  )
}

export default App
