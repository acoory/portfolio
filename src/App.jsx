import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  
  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App 