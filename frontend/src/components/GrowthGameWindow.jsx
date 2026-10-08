import React, { useRef, useEffect, useState, useCallback } from 'react';
import Draggable from 'react-draggable';
import { X } from 'lucide-react';
import { PLATFORM_LOGOS } from './PlatformLogos';
import { contactLinks, emailFor } from '../data/mockData';

const GAME_DURATION = 14;
const MAX_MISSES = 6;
const CANVAS_WIDTH = 480;
const CANVAS_HEIGHT = 400;

const GrowthGameWindow = ({ onClose, zIndex, onFocus, playSound, cascade = 0 }) => {
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
  const comboRef = useRef(0);
  const speedupIntervalRef = useRef(null);


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
    if (speedupIntervalRef.current) clearInterval(speedupIntervalRef.current);
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
          comboRef.current = 0;
          setCombo(0);
          return false;
        }
        return true;
      });

    setLeads([...leadsRef.current]);
    animationRef.current = requestAnimationFrame(animate);
  }, [endGame]);

  const startGame = () => {
    cleanup();
    comboRef.current = 0;
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
    speedupIntervalRef.current = setInterval(() => {
      if (gameStateRef.current !== 'playing') {
        clearInterval(speedupIntervalRef.current);
        return;
      }
      if (timeLeftRef.current < 6 && spawnIntervalRef.current) {
        clearInterval(spawnIntervalRef.current);
        spawnIntervalRef.current = setInterval(spawnLead, 900);
        clearInterval(speedupIntervalRef.current);
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
    // The animation loop starts from the gameState effect below; starting it
    // here too ran two loops and made leads fall at double speed
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

    // Score from the combo; kept in a ref so one catch is counted once
    const newCombo = comboRef.current + 1;
    comboRef.current = newCombo;
    let points = 10;
    if (newCombo === 2) points = 15;
    else if (newCombo >= 3) {
      points = 20;
      setComboFlash(`COMBO x${newCombo}!`);
      if (comboFlashTimeoutRef.current) clearTimeout(comboFlashTimeoutRef.current);
      comboFlashTimeoutRef.current = setTimeout(() => setComboFlash(null), 800);
    }
    setCombo(newCombo);
    setScore(prevScore => prevScore + points);
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
    >
      <div 
        ref={nodeRef}
        className="window growth-game-window"
        style={{ zIndex, top: `calc(8% + ${cascade * 28}px)`, left: `calc(20% + ${cascade * 28}px)` }}
        role="dialog"
        aria-label="Growth Game"
        onPointerDown={(e) => {
          e.stopPropagation();
          onFocus();
        }}
      >
        <div className="window-header">
          <div className="window-controls">
            <button 
              type="button"
              className="window-btn window-btn-close"
              aria-label="Close window" 
              onClick={handleClose}
              onMouseDown={(e) => e.stopPropagation()}
              onPointerDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
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
                <h2 className="game-title">Catch the Lead</h2>
                <p className="game-instructions">
                  Leads are dropping in from your feeds. Tap them before they escape.
                </p>
                <div className="game-platform-row" aria-label="Platforms in the game">
                  {PLATFORM_LOGOS.map(({ id, name, Component }) => (
                    <span key={id} title={name}><Component size={30} /></span>
                  ))}
                </div>
                <p className="game-instructions">
                  Miss {MAX_MISSES} and it's game over.
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
                      aria-label={`${lead.name} lead`}
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
                <div className="game-cta-links">
                  <a href={contactLinks.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
                  <a href={emailFor('game')} target="_blank" rel="noopener noreferrer">Hire the real growth guy →</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default GrowthGameWindow;
