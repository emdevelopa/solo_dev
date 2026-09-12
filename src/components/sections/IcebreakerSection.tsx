import { useState, useEffect, useRef, useCallback } from "react";
import { 
  IconPlayerPlay, 
  IconPlayerPause, 
  IconRotate, 
  IconSparkles, 
  IconVolume, 
  IconVolumeOff 
} from "@tabler/icons-react";

// Pentatonic scale notes frequencies (Hz) for warm, always-harmonic ambient sound
const FREQUENCIES = [523.25, 466.16, 392.0, 349.23, 311.13, 261.63]; // C5, Bb4, G4, F4, Eb4, C4

const INITIAL_GRID = [
  [true, false, false, true, false, false, true, false],
  [false, true, false, false, true, false, false, true],
  [false, false, true, false, false, true, false, false],
];

export const IcebreakerSection = () => {
  const [grid, setGrid] = useState<boolean[][]>(INITIAL_GRID);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [activeToy, setActiveToy] = useState<number | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Initialize or get AudioContext
  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  // Play a soft, ambient bell/marimba tone
  const playTone = useCallback((freq: number) => {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Warm attack and gentle bell exponential decay
      gain.gain.setValueAtTime(0.001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.55);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.6);
    } catch {
      // Audio context might be restricted before first gesture
    }
  }, [isMuted, getAudioContext]);

  // Step sequencer loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = window.setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % 8;

        // Trigger active notes in current step
        grid.forEach((row, rowIdx) => {
          if (row[nextStep]) {
            const freq = FREQUENCIES[rowIdx % FREQUENCIES.length];
            playTone(freq);
          }
        });

        return nextStep;
      });
    }, 240); // ~125 BPM

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, grid, playTone]);

  const toggleCell = (rowIdx: number, colIdx: number) => {
    getAudioContext();
    setGrid((prev) => {
      const next = prev.map((row, r) =>
        row.map((cell, c) => (r === rowIdx && c === colIdx ? !cell : cell))
      );
      return next;
    });
    // Play sound on click
    const freq = FREQUENCIES[rowIdx % FREQUENCIES.length];
    playTone(freq);
  };

  const handleRandomize = () => {
    getAudioContext();
    setGrid((prev) =>
      prev.map((row) => row.map(() => Math.random() > 0.65))
    );
  };

  const handleClear = () => {
    setGrid((prev) => prev.map((row) => row.map(() => false)));
    setIsPlaying(false);
  };

  return (
    <section id="icebreaker" className="w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#7C5A48] font-semibold block mb-2">
              Interactive / 04
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#281D19]">
              Take a Break. Play a Sequence.
            </h2>
            <p className="text-sm sm:text-base text-[#281D19]/70 mt-3 max-w-xl">
              An ambient pill sequencer built with the Web Audio API. Click pills to shape your melody, or tap the tactile fidget toys below.
            </p>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center gap-2.5 select-none self-start sm:self-auto">
            <button
              onClick={() => {
                getAudioContext();
                setIsPlaying(!isPlaying);
              }}
              className="flex items-center gap-2 bg-[#281D19] text-[#F4F1EA] hover:bg-black transition-colors px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              {isPlaying ? (
                <>
                  <IconPlayerPause className="w-3.5 h-3.5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <IconPlayerPlay className="w-3.5 h-3.5" />
                  <span>Play</span>
                </>
              )}
            </button>

            <button
              onClick={handleRandomize}
              className="p-2.5 bg-[#DFD8CE] hover:bg-[#D5CCC0] text-[#281D19] rounded-xl transition-colors"
              aria-label="Randomize sequence"
              title="Randomize"
            >
              <IconSparkles className="w-4 h-4" />
            </button>

            <button
              onClick={handleClear}
              className="p-2.5 bg-[#DFD8CE] hover:bg-[#D5CCC0] text-[#281D19] rounded-xl transition-colors"
              aria-label="Clear sequence"
              title="Clear"
            >
              <IconRotate className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2.5 bg-[#DFD8CE] hover:bg-[#D5CCC0] text-[#281D19] rounded-xl transition-colors"
              aria-label="Mute / Unmute"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? (
                <IconVolumeOff className="w-4 h-4 text-red-700" />
              ) : (
                <IconVolume className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* The Sequencer Station (Inspired by Image 1) */}
        <div className="bg-[#2D60E6] rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] p-4 sm:p-10 lg:p-14 select-none relative overflow-hidden transition-transform duration-300">
          <div className="flex flex-col gap-2.5 sm:gap-4 lg:gap-5 max-w-4xl mx-auto">
            {grid.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-8 gap-1.5 sm:gap-3 lg:gap-4 items-center">
                {row.map((isActive, colIdx) => {
                  const isCurrent = isPlaying && currentStep === colIdx;

                  return (
                    <button
                      key={colIdx}
                      onClick={() => toggleCell(rowIdx, colIdx)}
                      className={`h-10 sm:h-14 lg:h-16 rounded-xl sm:rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center col-span-1 touch-manipulation ${
                        isActive
                          ? "bg-[#F3B73E] scale-[1.03] text-black"
                          : "bg-white/95 hover:bg-white text-transparent hover:scale-[1.01]"
                      } ${
                        isCurrent
                          ? "scale-105 brightness-125 z-10"
                          : ""
                      }`}
                      aria-label={`Toggle note row ${rowIdx + 1} column ${colIdx + 1}`}
                    >
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full opacity-30 bg-black" />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Bottom Step Indicator Dots */}
          <div className="flex justify-center items-center gap-2 sm:gap-3.5 mt-6 sm:mt-8 pt-2 sm:pt-4">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((step) => (
              <span
                key={step}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                  isPlaying && currentStep === step
                    ? "bg-white scale-150"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Tactile Fidget Toys (Inspired by Image 3) */}
        <div className="mt-14 sm:mt-16">
          <div className="text-xs uppercase tracking-widest font-mono text-[#7C5A48] font-semibold mb-6">
            Tactile Fidget Pad · Click to trigger
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 select-none">
            {/* Toy 1: 4-Square Morph */}
            <div
              onClick={() => setActiveToy(activeToy === 1 ? null : 1)}
              className="bg-[#F4F1EA] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 grid grid-cols-2 gap-1.5 items-center justify-center">
                <span className={`w-5 h-5 bg-[#281D19] rounded-md transition-all duration-500 ${activeToy === 1 ? "rotate-45 scale-90" : ""}`} />
                <span className={`w-5 h-5 bg-[#281D19] rounded-md transition-all duration-500 ${activeToy === 1 ? "-rotate-45 scale-90" : ""}`} />
                <span className={`w-5 h-5 bg-[#281D19] rounded-md transition-all duration-500 ${activeToy === 1 ? "-rotate-45 scale-90" : ""}`} />
                <span className={`w-5 h-5 bg-[#281D19] rounded-md transition-all duration-500 ${activeToy === 1 ? "rotate-45 scale-90" : ""}`} />
              </div>
              <span className="text-[11px] font-mono opacity-60">Morph Grid</span>
            </div>

            {/* Toy 2: Pendulum / Cradle */}
            <div
              onClick={() => setActiveToy(activeToy === 2 ? null : 2)}
              className="bg-[#F4F1EA] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 flex flex-col items-center justify-center relative">
                <div className={`w-3.5 h-3.5 bg-[#281D19] rounded-full transition-transform duration-300 ${activeToy === 2 ? "translate-y-2 scale-125" : "-translate-y-1"}`} />
                <div className={`w-10 h-4 rounded-b-full bg-[#281D19] transition-transform duration-300 ${activeToy === 2 ? "rotate-12" : ""}`} />
              </div>
              <span className="text-[11px] font-mono opacity-60">Balance</span>
            </div>

            {/* Toy 3: Gravity Drop */}
            <div
              onClick={() => setActiveToy(activeToy === 3 ? null : 3)}
              className="bg-[#F4F1EA] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 flex items-center justify-center relative">
                <span className={`w-6 h-6 bg-[#281D19] rounded-full transition-all duration-500 ${activeToy === 3 ? "translate-y-4 scale-75" : "-translate-y-2"}`} />
              </div>
              <span className="text-[11px] font-mono opacity-60">Gravity</span>
            </div>

            {/* Toy 4: Triple Dot Sequence */}
            <div
              onClick={() => setActiveToy(activeToy === 4 ? null : 4)}
              className="bg-[#F4F1EA] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 flex items-center justify-center gap-2">
                <span className={`w-3 h-3 bg-[#281D19] rounded-full transition-all duration-300 ${activeToy === 4 ? "-translate-y-2 bg-[#EBA83A]" : ""}`} />
                <span className={`w-3 h-3 bg-[#281D19] rounded-full transition-all duration-300 delay-100 ${activeToy === 4 ? "-translate-y-2 bg-[#EBA83A]" : ""}`} />
                <span className={`w-3 h-3 bg-[#281D19] rounded-full transition-all duration-300 delay-200 ${activeToy === 4 ? "-translate-y-2 bg-[#EBA83A]" : ""}`} />
              </div>
              <span className="text-[11px] font-mono opacity-60">Pulse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IcebreakerSection;
