let audioCtx = null;
let isMuted = false;

const getAudioContext = () => {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
};

export const setMuted = (muted) => {
    isMuted = muted;
    localStorage.setItem('portfolio_muted', muted ? 'true' : 'false');
};

export const getMuted = () => {
    const stored = localStorage.getItem('portfolio_muted');
    if (stored === 'true') {
        isMuted = true;
    } else if (stored === 'false') {
        isMuted = false;
    }
    return isMuted;
};

export const toggleMuted = () => {
    const val = !getMuted();
    setMuted(val);
    return val;
};

export const playPageFlip = () => {
    if (getMuted()) return;
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const duration = 0.55;
        
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            b6 = white * 0.115926;
            data[i] = pink * 0.035;
        }
        
        const noiseNode = ctx.createBufferSource();
        noiseNode.buffer = buffer;
        
        const filterNode = ctx.createBiquadFilter();
        filterNode.type = 'bandpass';
        filterNode.Q.setValueAtTime(1.8, now);
        filterNode.frequency.setValueAtTime(220, now);
        filterNode.frequency.exponentialRampToValueAtTime(1300, now + duration * 0.4);
        filterNode.frequency.exponentialRampToValueAtTime(300, now + duration);
        
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.4, now + 0.1);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);
        
        noiseNode.connect(filterNode);
        filterNode.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        noiseNode.start(now);
        noiseNode.stop(now + duration);
    } catch (e) {
        console.warn("Audio synthesis error:", e);
    }
};

export const playStaplerClick = () => {
    if (getMuted()) return;
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        
        const playClick = (time, pitch, volume) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            const filter = ctx.createBiquadFilter();
            
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(pitch, time);
            osc.frequency.exponentialRampToValueAtTime(150, time + 0.02);
            
            filter.type = 'bandpass';
            filter.frequency.setValueAtTime(1400, time);
            filter.Q.setValueAtTime(6, time);
            
            gain.gain.setValueAtTime(volume, time);
            gain.gain.exponentialRampToValueAtTime(0.001, time + 0.02);
            
            osc.connect(filter);
            filter.connect(gain);
            gain.connect(ctx.destination);
            
            osc.start(time);
            osc.stop(time + 0.025);
        };
        
        playClick(now, 2400, 0.45);
        playClick(now + 0.04, 1900, 0.3);
    } catch (e) {
        console.warn("Audio synthesis error:", e);
    }
};

export const playTapeTear = () => {
    if (getMuted()) return;
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const duration = 0.22;
        
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.045;
        }
        
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        
        const filter = ctx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.setValueAtTime(1800, now);
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
        
        for (let t = 0.04; t < duration; t += 0.03) {
            gain.gain.setValueAtTime(0.08 + Math.random() * 0.08, now + t);
        }
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        
        source.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        source.start(now);
        source.stop(now + duration);
    } catch (e) {
        console.warn("Audio synthesis error:", e);
    }
};

export const playMarkerSketch = () => {
    if (getMuted()) return;
    try {
        const ctx = getAudioContext();
        const now = ctx.currentTime;
        const duration = 0.38;
        
        const bufferSize = ctx.sampleRate * duration;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.025;
        }
        
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        
        const filter = ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(750, now);
        filter.frequency.linearRampToValueAtTime(880, now + duration * 0.45);
        filter.frequency.linearRampToValueAtTime(700, now + duration);
        filter.Q.setValueAtTime(2.5, now);
        
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.22, now + 0.04);
        gain.gain.setValueAtTime(0.18, now + duration - 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
        
        source.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        
        source.start(now);
        source.stop(now + duration);
    } catch (e) {
        console.warn("Audio synthesis error:", e);
    }
};
