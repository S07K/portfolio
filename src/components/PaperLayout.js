import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { switchMode } from './store/dataSlice';
import { playStaplerClick, getMuted, toggleMuted } from './SoundManager';
import '../css/paperTheme.css';

const PaperLayout = ({ children }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.navstate.darkMode);
  const [muted, setMutedState] = useState(getMuted());

  // Parallax Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return; // Disable tilt on mobile
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({
      x: x * 5, // 5 degrees max Y-tilt
      y: -y * 5 // 5 degrees max X-tilt
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

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
      className="deskContainer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Coffee stain on the wooden desk */}
      <div className="coffeeStain" />

      {/* Desktop/Mobile Mute and Theme Stickers */}
      <div className="deskStickers">
        <div className="deskSticker" onClick={handleMuteToggle}>
          {muted ? '🔇 Mute On' : '🔊 Sound On'}
        </div>
        
        <div 
          className="deskSticker" 
          onClick={handleThemeToggle}
          style={{ 
            background: darkMode ? '#ecf0f1' : '#2c3e50', 
            color: darkMode ? '#2c3e50' : '#ffffff',
            borderColor: '#bdc3c7'
          }}
        >
          {darkMode ? '💡 Bright' : '🌙 Dark'}
        </div>

        <a 
          href="https://www.buymeacoffee.com/shubham343c" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="deskSticker"
          onClick={() => playStaplerClick()}
        >
          ☕ Buy Coffee
        </a>
      </div>

      {/* Layered Paper Canvas Sheet */}
      <div 
        className="paperCanvas"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
        }}
      >
        {/* Decorative clip on top-left of sheet */}
        <div 
          className="paperclip" 
          style={{ top: '-18px', left: '35px', transform: 'rotate(-8deg)' }} 
          onClick={() => playStaplerClick()}
        >
          <svg width="24" height="48" viewBox="0 0 24 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2V38C12 41.3137 9.31371 44 6 44C2.68629 44 0 41.3137 0 38V10C0 5.58172 3.58172 2 8 2C12.4183 2 16 5.58172 16 10V34C16 36.2091 14.2091 38 12 38C9.79086 38 8 36.2091 8 34V12" stroke={darkMode ? '#f1c40f' : '#7f8c8d'} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {children}
      </div>
    </div>
  );
};

export default PaperLayout;
