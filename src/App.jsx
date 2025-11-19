import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Work from './pages/Work'
import Approach from './pages/Approach'
import About from './pages/About'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/approach" element={<Approach />} />
      <Route path="/about" element={<About />} />
      <Route path="/insights" element={<Insights />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
