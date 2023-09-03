import './App.css';
import Navbar from './components/Nav/Navbar';
import Intro from './components/Intro/Intro';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { switchView } from './components/store/dataSlice'
import scrollHandler from './components/scrollHandler';

function App() {
  const navState = useSelector((state) => state.navstate.data);
  const dispatch = useDispatch()

  const switchViewHandler = (key) => {
    const newData = cloneDeep(navState)
    let lastActiveView = Object.keys(newData).filter(key => newData[key] === true)
    newData[lastActiveView] = false
    newData[key] = true
    dispatch(switchView(newData))
  }

  useEffect(() => {
    let route = window.location.pathname;
    switch (route) {
      case '/': switchViewHandler('intro')
        break;
      case '/experience': switchViewHandler('exp')
        break;
      case '/education': switchViewHandler('edu')
        break;
      case '/projects': switchViewHandler('projects')
        break;
      default: switchViewHandler('intro')
        break;
    }
  }, [])
  scrollHandler();
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro isActive={navState.intro} />} />
          <Route path="experience" element={<Experience isActive={navState.exp} />} />
          <Route path="education" element={<Education isActive={navState.edu} />} />
          <Route path="projects" element={<Projects isActive={navState.projects} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
