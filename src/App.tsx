import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Location />
      </main>
      <Footer />
    </div>
  )
}

export default App
