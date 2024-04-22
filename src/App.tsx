// import './App.css'
import { Footer } from './components/layout/footer'
import { Header } from './components/layout/header'
import { AboutSection } from './components/sections/about.section'
import { HomeSection } from './components/sections/home.section'
import { CodingSection } from './components/sections/coding.section'
import { PortfolioSection } from './components/sections/portfolio.section'

function App() {
  return (
    <div className='w-full mx-auto min-h-screen text-slate-200'>
      <Header />
      <div className='px-4 py-4'>
        <HomeSection />
        <hr />
        <div id='about' className='h-screen pt-[80px] w-full flex justify-between gap-4'>
          <div className='w-[60%]'>
            <AboutSection />
          </div>
          <div className='w-[40%]'>
            <CodingSection />
          </div>
        </div>
        <hr />
        <PortfolioSection />

        {/* <ContactSection /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App
