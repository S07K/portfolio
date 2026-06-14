import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { switchViewHandler } from './NavigationHandler';
import { switchMode } from './store/dataSlice';
import {
  playPageFlip,
  playStaplerClick,
  playTapeTear,
  getMuted,
  toggleMuted
} from './SoundManager';
import imgMe from '../assets/images/new4.png';
import '../css/scrapbook.css';

const Book = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const darkMode = useSelector((state) => state.navstate.darkMode);
  const navState = useSelector((state) => state.navstate.data);
  const [muted, setMutedState] = useState(getMuted());

  // 3D Tilt Parallax State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Disable on mobile
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - top) / height - 0.5; // -0.5 to 0.5
    setTilt({
      x: x * 8, // Max tilt angle X
      y: -y * 8 // Max tilt angle Y
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Sync Redux state with active tab based on router pathname
  const getTabKeyFromPath = (path) => {
    if (path.includes('experience')) return 'exp';
    if (path.includes('education')) return 'edu';
    if (path.includes('projects')) return 'projects';
    return 'intro';
  };

  const activeKey = getTabKeyFromPath(location.pathname);

  const handleTabClick = (tabName, routePath) => {
    if (activeKey === tabName) return;
    playPageFlip();
    switchViewHandler(tabName, navState, dispatch);
    navigate(routePath);
  };

  const handleMuteToggle = () => {
    const isNowMuted = toggleMuted();
    setMutedState(isNowMuted);
    playStaplerClick();
  };

  // Sound triggers for decorations
  const triggerTapeSound = () => {
    playTapeTear();
  };

  const triggerStaplerSound = () => {
    playStaplerClick();
  };

  // Polaroid picture tape wiggles
  const [polaroidWiggle, setPolaroidWiggle] = useState(false);
  const triggerPolaroidWiggle = () => {
    setPolaroidWiggle(true);
    playTapeTear();
    setTimeout(() => setPolaroidWiggle(false), 500);
  };

  // Resume card wiggle
  const [resumeWiggle, setResumeWiggle] = useState(false);
  const handleResumeClick = () => {
    setResumeWiggle(true);
    playStaplerClick();
    setTimeout(() => {
      setResumeWiggle(false);
      window.open('https://drive.google.com/file/d/1ahUVkN2IhroDbCRon6qqV_rmIgUDvgKL/view?usp=sharing', '_blank');
    }, 450);
  };

  // Theme Toggler sticker
  const handleThemeToggle = () => {
    dispatch(switchMode(!darkMode));
    playStaplerClick();
  };

  useEffect(() => {
    // Add dark-mode class to body for global theme color changes
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Tabs navigation config
  const tabs = [
    { key: 'intro', label: '📖 Intro', path: '/portfolio', color: '#f1c40f', darkColor: '#d4ac0d' },
    { key: 'exp', label: '💼 Experience', path: '/experience', color: '#ef476f', darkColor: '#d63031' },
    { key: 'edu', label: '🎓 Education', path: '/education', color: '#06d6a0', darkColor: '#00b894' },
    { key: 'projects', label: '🚀 Projects', path: '/projects', color: '#e67e22', darkColor: '#d35400' }
  ];

  return (
    <div 
      className="deskContainer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative coffee mug stain on the desk */}
      <div className="coffeeStain" />

      {/* Desk stickers (bottom right) */}
      <div className="deskStickers">
        {/* Mute/Unmute sticker */}
        <div className="muteSticker" onClick={handleMuteToggle}>
          {muted ? '🔇 Mute On' : '🔊 Sound On'}
        </div>
        
        {/* Dark/Light mode toggle sticker */}
        <div 
          className="muteSticker" 
          onClick={handleThemeToggle}
          style={{ background: darkMode ? '#ecf0f1' : '#2c3e50', color: darkMode ? '#2c3e50' : '#ffffff', border: '2px dashed #95a5a6' }}
        >
          {darkMode ? '💡 Bright Mode' : '🌙 Dark Mode'}
        </div>

        {/* Coffee Mug Link (BMC Widget integration) */}
        <a 
          href="https://www.buymeacoffee.com/shubham343c" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="coffeeSticker"
          onClick={triggerStaplerSound}
        >
          ☕ Buy Me Coffee
        </a>
      </div>

      {/* 3D Book Layout */}
      <div className="bookPerspective">
        <div 
          className="bookWrapper"
          style={{
            transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          }}
        >
          {/* Spinal rings Down The Spine (Visible on Desktop) */}
          <div className="bookSpine" />
          <div className="spiralsContainer">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="spiralRing" />
            ))}
          </div>

          {/* Left Page (Story & Bio Details) */}
          <div className="bookPage leftPage notebookPaper">
            {/* Washi tape on Polaroid top-center */}
            <div 
              className="washiTape" 
              style={{ 
                top: '25px', 
                background: 'rgba(230, 126, 34, 0.45)', 
                transform: 'rotate(-5deg)'
              }}
              onClick={triggerTapeSound}
            />

            {/* Polaroid frame showing Shubham */}
            <motion.div 
              className="polaroidFrame" 
              style={{ marginTop: '35px' }}
              animate={polaroidWiggle ? { rotate: [ -3.5, 5, -5, 0 ] } : {}}
              onClick={triggerPolaroidWiggle}
            >
              <img src={imgMe} alt="Shubham" />
              <div className="polaroidCaption">Me at Paytm ☕</div>
            </motion.div>

            {/* Paperclip pinning Resume */}
            <motion.div 
              className="paperclipWrapper"
              style={{ top: '220px', left: '20px', transform: 'rotate(15deg)' }}
              animate={resumeWiggle ? { y: [0, -8, 4, 0], rotate: [15, 25, 10, 15] } : {}}
              onClick={handleResumeClick}
            >
              <svg width="28" height="60" viewBox="0 0 24 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2V46C12 50.418 8.418 54 4 54C-0.418 54 -4 50.418 -4 46V12C-4 6.477 0.477 2 6 2C11.523 2 16 6.477 16 12V38C16 41.314 13.314 44 10 44C6.686 44 4 41.314 4 38V14" stroke={darkMode ? "#f1c40f" : "#7f8c8d"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div 
                className="stickyNote"
                style={{ 
                  position: 'absolute', 
                  left: '18px', 
                  top: '12px', 
                  width: '120px', 
                  padding: '8px 10px',
                  background: '#fce4ec',
                  transform: 'rotate(-10deg)',
                  fontSize: '0.8rem',
                  color: '#4a148c',
                  borderLeft: '3px solid #e91e63'
                }}
              >
                📄 Get My Resume
              </div>
            </motion.div>

            {/* Stapler Pin on Paytm Tag */}
            <div 
              style={{ position: 'relative', marginTop: '45px', width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <div className="staplerPin" style={{ top: '-4px', left: 'calc(50% - 8px)' }} />
              <div 
                className="stickyNote"
                style={{ 
                  background: '#e8f8f5', 
                  color: '#117864', 
                  borderLeft: '3px solid #1abc9c',
                  transform: 'rotate(3deg)',
                  cursor: 'pointer',
                  width: '185px',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}
                onClick={triggerStaplerSound}
              >
                🏢 Sr. Software Engineer <br />
                <span style={{ fontSize: '0.9rem' }}>@ Paytm</span>
              </div>
            </div>

            {/* Handwritten Personal introduction storytelling note */}
            <div 
              className="handwritten" 
              style={{ 
                marginTop: '30px', 
                width: '100%', 
                padding: '0 20px', 
                textAlign: 'left',
                color: darkMode ? '#e1b12c' : '#2c3e50'
              }}
            >
              <p style={{ margin: '8px 0' }}>Hola Reader!</p>
              <p style={{ margin: '8px 0', fontSize: '1.25rem', fontFamily: 'var(--handwriting-font)' }}>
                This is my coding diary. Flip through the tabs on the right side to read the story of how I design systems, build APIs, and construct pixel-perfect frontend portals!
              </p>
              <p style={{ textAlign: 'right', fontSize: '1.1rem', fontStyle: 'italic' }}>— Shubham</p>
            </div>
          </div>

          {/* Right Page (Active Section Content with 3D Flip) */}
          <div className="bookPage rightPage notebookPaper">
            {/* Spiral Rings for Mobile Layout */}
            <div className="mobileSpirals">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="mobileSpiralRing" />
              ))}
            </div>

            {/* Index Tabs (Desktop sticking out of side, Mobile lined at top) */}
            <div className="tabsContainer">
              {tabs.map((tab) => {
                const isActive = activeKey === tab.key;
                return (
                  <div
                    key={tab.key}
                    className={`indexTab ${isActive ? 'indexTabActive' : ''}`}
                    onClick={() => handleTabClick(tab.key, tab.path)}
                    style={{
                      background: darkMode ? tab.darkColor : tab.color,
                      color: '#ffffff',
                      borderLeft: 'none'
                    }}
                  >
                    {tab.label}
                  </div>
                );
              })}
            </div>

            {/* 3D Page flip container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ rotateY: 35, opacity: 0, transformOrigin: 'left center' }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -35, opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Book;
