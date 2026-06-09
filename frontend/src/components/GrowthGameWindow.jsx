import React, { useRef, useEffect, useState, useCallback } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';
import { PLATFORM_LOGOS } from './PlatformLogos';

const GAME_DURATION = 14;
const MAX_MISSES = 6;
const CANVAS_WIDTH = 480;
const CANVAS_HEIGHT = 400;

const GrowthGameWindow = ({ onClose, zIndex, onFocus, playSound }) => {
  const nodeRef = useRef(null);
  const canvasRef = useRef(null);
  const [gameState, setGameState] = useState('start'); // start | playing | gameover
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION);
  const [combo, setCombo] = useState(0);
  const [comboFlash, setComboFlash] = useState(null);
  const [leads, setLeads] = useState([]);
  const [canvasWidth, setCanvasWidth] = useState(CANVAS_WIDTH);

  const leadsRef = useRef([]);
  const canvasWidthRef = useRef(CANVAS_WIDTH);
  const animationRef = useRef(null);
  const spawnIntervalRef = useRef(null);
  const timerIntervalRef = useRef(null);
  const comboFlashTimeoutRef = useRef(null);
  const gameStateRef = useRef('start');
  const timeLeftRef = useRef(GAME_DURATION);

  useEffect(() => {
    if (playSound) playSound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const updateCanvasWidth = () => {
      if (!canvasRef.current) return;
      const measuredWidth = canvasRef.current.clientWidth || canvasRef.current.parentElement?.clientWidth || CANVAS_WIDTH;
      const resolvedWidth = Math.min(CANVAS_WIDTH, Math.max(280, measuredWidth));
      setCanvasWidth(resolvedWidth);
      canvasWidthRef.current = resolvedWidth;
    };

    updateCanvasWidth();
    const resizeObserver = new ResizeObserver(updateCanvasWidth);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }
    window.addEventListener('resize', updateCanvasWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateCanvasWidth);
    };
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    if (playSound) playSound();
    cleanup();
    onClose();
  };

  const cleanup = useCallback(() => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    if (spawnIntervalRef.current) clearInterval(spawnIntervalRef.current);
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    if (comboFlashTimeoutRef.current) clearTimeout(comboFlashTimeoutRef.current);
  }, []);

  const endGame = useCallback(() => {
    gameStateRef.current = 'gameover';
    setGameState('gameover');
    cleanup();
  }, [cleanup]);

  const spawnLead = useCallback(() => {
    const canvasWidth = canvasWidthRef.current;
    const leadType = PLATFORM_LOGOS[Math.floor(Math.random() * PLATFORM_LOGOS.length)];
    const id = Math.random().toString(36).slice(2);
    // Speed increases as time runs out
    const speedMultiplier = 1.0 + (GAME_DURATION - timeLeftRef.current) / (GAME_DURATION * 1.5);
    const newLead = {
      id,
      LogoComponent: leadType.Component,
      name: leadType.name,
      x: Math.random() * (canvasWidth - 50) + 10,
      y: -40,
      speed: (1.1 + Math.random() * 1.2) * speedMultiplier
    };
    leadsRef.current = [...leadsRef.current, newLead];
    setLeads([...leadsRef.current]);
  }, []);

  const animate = useCallback(() => {
    if (gameStateRef.current !== 'playing') return;

    const currentCanvasHeight = (canvasWidthRef.current / CANVAS_WIDTH) * CANVAS_HEIGHT;

    leadsRef.current = leadsRef.current
      .map(l => ({ ...l, y: l.y + l.speed }))
      .filter(l => {
        if (l.y > currentCanvasHeight) {
          // Missed
          setMissed(prev => {
            const newMissed = prev + 1;
            if (newMissed >= MAX_MISSES) {
              endGame();
            }
            return newMissed;
          });
          setCombo(0);
          return false;
        }
        return true;
      });

    setLeads([...leadsRef.current]);
    animationRef.current = requestAnimationFrame(animate);
  }, [endGame]);

  const startGame = () => {
    setScore(0);
    setMissed(0);
    setTimeLeft(GAME_DURATION);
    setCombo(0);
    setComboFlash(null);
    setLeads([]);
    leadsRef.current = [];
    gameStateRef.current = 'playing';
    timeLeftRef.current = GAME_DURATION;
    setGameState('playing');

    // Spawn a lead immediately so mobile users see gameplay right away
    spawnLead();
    spawnIntervalRef.current = setInterval(spawnLead, 1200);

    // Faster spawn later to push for a balanced challenge
    const speedupInterval = setInterval(() => {
      if (gameStateRef.current !== 'playing') {
        clearInterval(speedupInterval);
        return;
      }
      if (timeLeftRef.current < 6 && spawnIntervalRef.current) {
        clearInterval(spawnIntervalRef.current);
        spawnIntervalRef.current = setInterval(spawnLead, 900);
        clearInterval(speedupInterval);
      }
    }, 1000);

    // Timer
    timerIntervalRef.current = setInterval(() => {
      timeLeftRef.current -= 1;
      setTimeLeft(timeLeftRef.current);
      if (timeLeftRef.current <= 0) {
        endGame();
      }
    }, 1000);

    // Animation loop
    animationRef.current = requestAnimationFrame(animate);
  };

  // Re-trigger animation on each render while playing
  useEffect(() => {
    if (gameState === 'playing') {
      animationRef.current = requestAnimationFrame(animate);
    }
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gameState, animate]);

  useEffect(() => {
    return () => cleanup();
  }, [cleanup]);

  const canvasHeight = (canvasWidth / CANVAS_WIDTH) * CANVAS_HEIGHT;

  const handleLeadClick = (leadId) => {
    const lead = leadsRef.current.find(l => l.id === leadId);
    if (!lead) return;

    // Remove the lead
    leadsRef.current = leadsRef.current.filter(l => l.id !== leadId);
    setLeads([...leadsRef.current]);

    // Calculate score based on combo
    setCombo(prev => {
      const newCombo = prev + 1;
      let points = 10;
      if (newCombo === 2) points = 15;
      else if (newCombo >= 3) {
        points = 20;
        setComboFlash(`COMBO x${newCombo}!`);
        if (comboFlashTimeoutRef.current) clearTimeout(comboFlashTimeoutRef.current);
        comboFlashTimeoutRef.current = setTimeout(() => setComboFlash(null), 800);
      }
      setScore(prevScore => prevScore + points);
      return newCombo;
    });
  };

 const getEndMessage = () => {
  if (score >= 300)
    return 'Bhai you are literally a growth machine. Hire karo isko.';

  if (score >= 220)
    return 'Solid. You click leads like Manish closes brand deals.';

  if (score >= 120)
    return 'Decent. Manish would have converted those missed ones though.';

  return 'Rough day. Even the CPV on this was bad.';
};

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      cancel=".window-btn"
      bounds="parent"
      onStart={onFocus}
    >
      <div 
        ref={nodeRef}
        className="window growth-game-window"
        style={{ zIndex, top: '8%', left: '20%' }}
        onMouseDown={onFocus}
        onPointerDown={onFocus}
        onTouchStart={onFocus}
      >
        <div className="window-header">
          <div className="window-controls">
            <button 
              type="button"
              className="window-btn window-btn-close" 
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => { e.stopPropagation(); handleClose(e); }}
              data-testid="close-growth-game"
            >
              <X size={10} />
            </button>
          </div>
          <div className="window-title">🎮 Catch the Lead</div>
        </div>
        
        <div className="game-canvas-wrapper">
          {gameState === 'playing' && (
            <div className="game-hud">
              <div className="game-hud-item">Score: <strong>{score}</strong></div>
              <div className="game-hud-item">Time: <strong>{timeLeft}s</strong></div>
              <div className="game-hud-item">Missed: <strong>{missed}/{MAX_MISSES}</strong></div>
              <div className="game-hud-item">Combo: <strong>x{combo}</strong></div>
            </div>
          )}

          <div 
            className="game-canvas" 
            ref={canvasRef}
            style={{ width: '100%', maxWidth: CANVAS_WIDTH, height: canvasHeight }}
            data-testid="game-canvas"
          >
            {gameState === 'start' && (
              <div className="game-overlay">
                <h2 className="game-title">🎮 Catch the Lead</h2>
                <p className="game-instructions">
                  Leads are falling — click them before they escape.
                </p>
                <p className="game-instructions">
                  Miss 5 and it's game over.
                </p>
                    <button 
                  type="button"
                  className="game-btn game-btn-start" 
                  onClick={startGame}
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => { e.stopPropagation(); }}
                  data-testid="start-game-btn"
                >
                  ▶ Start
                </button>
              </div>
            )}

            {gameState === 'playing' && (
              <>
                {leads.map(lead => {
                  const Logo = lead.LogoComponent;
                  return (
                    <div
                      key={lead.id}
                      className="game-lead"
                      style={{
                        left: `${lead.x}px`,
                        top: `${lead.y}px`
                      }}
                      onPointerDown={(e) => {
                        e.stopPropagation();
                        handleLeadClick(lead.id);
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation();
                        handleLeadClick(lead.id);
                      }}
                    >
                      <Logo size={40} />
                    </div>
                  );
                })}
                {comboFlash && (
                  <div className="combo-flash">{comboFlash}</div>
                )}
              </>
            )}

            {gameState === 'gameover' && (
              <div className="game-overlay">
                <h2 className="game-title">Game Over</h2>
                <div className="game-score">
                  Score: <strong>{score}</strong>
                </div>
                <p className="game-end-message">{getEndMessage()}</p>
                <button 
                  type="button"
                  className="game-btn game-btn-start" 
                  onClick={startGame}
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => { e.stopPropagation(); }}
                  data-testid="restart-game-btn"
                >
                  ↻ Play Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default GrowthGameWindow;
