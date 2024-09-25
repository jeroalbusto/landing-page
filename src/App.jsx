import './App.css'
import NavBAR from './components/NavBar'
import HeroSection from './components/HeroSection'
import { partnersLogo } from './data/partners'
import Slider from './components/Slider'


function App() {
  return (
    <>
    <div className='w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none'>
      <div className='absolute inset-0 bg-[url("/grid.svg")] opacity-25'></div>
      <img src="./mesh.svg" className='opacity-15 absolute bottom-1 h-[600px] z-10'/>
      <div className='bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20'></div>
    </div>
    <div className='relative z-20'>
    <NavBAR />
    <div className='container mx-auto'>
    <HeroSection />
    <Slider images={partnersLogo}/>
    </div>
    </div>
    </>
  )
}

export default App
