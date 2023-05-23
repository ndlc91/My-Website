import './index.css'
import Home from '../src/pages/Home'
import Projects from './pages/Projects';
import Resume from './pages/Resume'
import { GrLinkedin } from 'react-icons/gr';
import { AiFillGithub, AiFillMail } from 'react-icons/ai'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <header className="sticky top-0 z-50 py-4 bg-amber-300 border-b-2 border-gray-200">
          <div className="relative">
            <nav className="flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0">
              <div>
                <div className="px-5">NDLC</div>
              </div>
              <div className="flex px-3 justify-between">
                <Link to="/resume">
                  <div className="m-4 cursor-pointer font-serif">Resume</div>
                </Link>
                <Link to="/projects">
                  <div className="m-4 cursor-pointer font-serif">Projects</div>
                </Link>
                <a className="m-4" href="https://www.linkedin.com/in/njdelacruz/" target="_blank">
                  <GrLinkedin />
                </a>
                <a className="m-4" href="https://github.com/ndlc91" target="_blank">
                  <AiFillGithub />

                </a>
                <AiFillMail className="m-4" />
              </div>
            </nav>
          </div>

        </header>


        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/resume" element={<Resume />} />

        </Routes>

      </Router>
    </>

  )
}

const Root = () => {
  <Navbar />
}

export default App
