import './App.css';
import Home from './views/Home';
import Contact from './views/Contact';
import Projects from './views/Projects';
import ErrorPage from './views/ErrorPage'
import ProjectsApps from './components/ProjectsApps'
import ProjectsGames from './components/ProjectsGames'
import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Projects />}>
          <Route path="apps" element={<ProjectsApps />} />
          <Route path="games" element={<ProjectsGames />} />
        </Route>
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
      
    </div>
  );
}

export default App;
