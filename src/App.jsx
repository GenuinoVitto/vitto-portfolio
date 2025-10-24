import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from './components/Home.jsx'
import Projects from "./components/Projects.jsx";
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element ={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
