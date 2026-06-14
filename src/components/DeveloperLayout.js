import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { switchViewHandler } from './NavigationHandler';
import { switchMode } from './store/dataSlice';
import { playPageFlip, playStaplerClick, getMuted, toggleMuted } from './SoundManager';
import imgMe from '../assets/images/mewithbg.png';
import '../css/developerTheme.css';

const DeveloperLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const darkMode = useSelector((state) => state.navstate.darkMode);
  const navState = useSelector((state) => state.navstate.data);
  const [muted, setMutedState] = useState(getMuted());

  // 3D Parallax Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 960) return; // Disable tilt on tablet/mobile folding
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({
      x: x * 4,
      y: -y * 4
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Keyboard navigation listener (inspired by PostHog)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Avoid firing shortcuts when user is typing in form inputs (if any)
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      const navigateTo = (tabKey, path) => {
        e.preventDefault();
        playPageFlip();
        switchViewHandler(tabKey, navState, dispatch);
        navigate(path);
      };

      switch (e.key) {
        case '1':
          navigateTo('intro', '/portfolio');
          break;
        case '2':
          navigateTo('exp', '/experience');
          break;
        case '3':
          navigateTo('edu', '/education');
          break;
        case '4':
          navigateTo('projects', '/projects');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navState, navigate, dispatch]);

  const handleMuteToggle = () => {
    const isNowMuted = toggleMuted();
    setMutedState(isNowMuted);
    playStaplerClick();
  };

  const handleThemeToggle = () => {
    dispatch(switchMode(!darkMode));
    playStaplerClick();
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div 
      className="workspaceContainer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left SidebarPanel (Profile & Diagnostic Terminal Box) */}
      <aside className="sidebarPanel">
        <div className="profileFrame">
          <img src={imgMe} alt="Shubham Kumar" />
        </div>

        {/* Profile metadata JSON terminal code window */}
        <div className="terminalWindow">
          <div className="terminalHeader">
            <div className="terminalControls">
              <div className="terminalDot dotRed"></div>
              <div className="terminalDot dotYellow"></div>
              <div className="terminalDot dotGreen"></div>
            </div>
            <div className="terminalTitle">profile.json</div>
          </div>
          <pre className="terminalBody" style={{ color: darkMode ? '#8be9fd' : '#0969da' }}>
{`{
  "name": "Shubham",
  "role": "Sr. Engineer",
  "company": "Paytm",
  "loc": "India",
  "status": "online"
}`}
          </pre>
        </div>

        {/* Keyboard shortcut map */}
        <div className="keyboardGuide">
          <div className="keyboardGuideTitle">Shortcuts</div>
          
          <div className="keyboardGuideItem">
            <span>Intro</span>
            <kbd>1</kbd>
          </div>
          <div className="keyboardGuideItem">
            <span>Experience</span>
            <kbd>2</kbd>
          </div>
          <div className="keyboardGuideItem">
            <span>Education</span>
            <kbd>3</kbd>
          </div>
          <div className="keyboardGuideItem">
            <span>Projects</span>
            <kbd>4</kbd>
          </div>
        </div>

        {/* Console Mute and Theme Controls */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="deskSticker" onClick={handleMuteToggle} style={{ width: '100%', justifyContent: 'center' }}>
            {muted ? '🔇 Muted' : '🔊 Sound On'}
          </div>
          <div 
            className="deskSticker" 
            onClick={handleThemeToggle}
            style={{ 
              width: '100%', 
              justifyContent: 'center',
              background: darkMode ? '#ecf0f1' : '#21262d', 
              color: darkMode ? '#21262d' : '#ffffff',
              borderColor: 'transparent'
            }}
          >
            {darkMode ? '💡 Bright' : '🌙 Dark'}
          </div>
        </div>
      </aside>

      {/* Right Content Workspace Panel */}
      <main 
        className="contentPanel"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out'
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default DeveloperLayout;
