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
        <div id='about' className='min-h-screen pt-[80px] px-2 lg:px-8 w-full lg:flex lg:justify-between gap-4'>
          <div className='w-full lg:w-[60%]'>
            <AboutSection />
          </div>
          <div className='w-full lg:w-[40%] mt-8 lg:mt-0'>
            <CodingSection />
          </div>
        </div>
        <hr />
        <PortfolioSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
