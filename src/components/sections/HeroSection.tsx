import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { IconDownload } from "@tabler/icons-react";

const Oscilloscope = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      time += 0.04;
      const width = canvas.width;
      const height = canvas.height;

      // Clear with deep CRT background
      ctx.fillStyle = "#19110E";
      ctx.fillRect(0, 0, width, height);

      // Graticule parameters (10 cols x 8 rows)
      const padX = 20;
      const padY = 20;
      const gridW = width - padX * 2;
      const gridH = height - padY * 2;
      const cols = 10;
      const rows = 8;
      const colW = gridW / cols;
      const rowH = gridH / rows;
      const midX = padX + (cols / 2) * colW;
      const midY = padY + (rows / 2) * rowH;

      // 1. Draw Grid Lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(163, 108, 82, 0.22)";

      // Vertical lines
      for (let i = 0; i <= cols; i++) {
        const x = padX + i * colW;
        ctx.beginPath();
        ctx.moveTo(x, padY);
        ctx.lineTo(x, padY + gridH);
        ctx.stroke();
      }

      // Horizontal lines
      for (let j = 0; j <= rows; j++) {
        const y = padY + j * rowH;
        ctx.beginPath();
        ctx.moveTo(padX, y);
        ctx.lineTo(padX + gridW, y);
        ctx.stroke();
      }

      // 2. Central Axes (More pronounced)
      ctx.strokeStyle = "rgba(195, 133, 104, 0.45)";
      ctx.beginPath();
      ctx.moveTo(midX, padY);
      ctx.lineTo(midX, padY + gridH);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(padX, midY);
      ctx.lineTo(padX + gridW, midY);
      ctx.stroke();

      // 3. Sub-division Tick Marks along central axes (5 ticks per division)
      const subTicks = 5;
      const tickSize = 3.5;
      ctx.strokeStyle = "rgba(195, 133, 104, 0.6)";

      // Ticks on horizontal axis
      for (let i = 0; i <= cols * subTicks; i++) {
        const x = padX + i * (colW / subTicks);
        const tLen = i % subTicks === 0 ? tickSize * 1.6 : tickSize;
        ctx.beginPath();
        ctx.moveTo(x, midY - tLen);
        ctx.lineTo(x, midY + tLen);
        ctx.stroke();
      }

      // Ticks on vertical axis
      for (let j = 0; j <= rows * subTicks; j++) {
        const y = padY + j * (rowH / subTicks);
        const tLen = j % subTicks === 0 ? tickSize * 1.6 : tickSize;
        ctx.beginPath();
        ctx.moveTo(midX - tLen, y);
        ctx.lineTo(midX + tLen, y);
        ctx.stroke();
      }

      // 4. Waveform Calculation
      // Modulate frequency/amplitude based on hover & time
      const targetAmp = isHovered ? 48 + (mousePos.y - 0.5) * 28 : 42;
      const freqMult = isHovered ? 1 + (mousePos.x - 0.5) * 0.8 : 1;

      // Draw outer ambient beam glow
      ctx.lineWidth = 4.5;
      ctx.strokeStyle = "rgba(245, 184, 150, 0.28)";
      ctx.beginPath();
      for (let x = padX; x <= padX + gridW; x += 1.5) {
        const relX = (x - padX) / gridW;
        // Harmonic waveform with fundamental and 3rd harmonic
        const y =
          midY +
          Math.sin(relX * Math.PI * 4.2 * freqMult + time) * targetAmp * 0.75 +
          Math.sin(relX * Math.PI * 8.4 * freqMult - time * 0.8) * (targetAmp * 0.25) +
          Math.sin(time * 2 + relX * Math.PI * 2) * 3;

        if (x === padX) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Draw primary core beam
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#F6C1A4";
      ctx.beginPath();
      for (let x = padX; x <= padX + gridW; x += 1.5) {
        const relX = (x - padX) / gridW;
        const y =
          midY +
          Math.sin(relX * Math.PI * 4.2 * freqMult + time) * targetAmp * 0.75 +
          Math.sin(relX * Math.PI * 8.4 * freqMult - time * 0.8) * (targetAmp * 0.25) +
          Math.sin(time * 2 + relX * Math.PI * 2) * 3;

        if (x === padX) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos, isHovered]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePos({
        x: Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width)),
        y: Math.max(0, Math.min(1, (touch.clientY - rect.top) / rect.height)),
      });
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onTouchMove={handleTouchMove}
      className="w-full max-w-xs sm:max-w-md aspect-[4/3] bg-[#19110E] rounded-[20px] sm:rounded-[30px] p-2 sm:p-3 flex items-center justify-center select-none cursor-crosshair transition-transform duration-300 hover:scale-[1.01] touch-none"
    >
      <canvas
        ref={canvasRef}
        width={380}
        height={285}
        className="w-full h-full rounded-[16px] sm:rounded-[22px] block"
      />
    </div>
  );
};

export const HeroSection = () => {
  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);
  const logoMarkRef = useRef<HTMLDivElement | null>(null);

  // Initial Entrance Animation with GSAP
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.25 });

    if (leftCardRef.current && rightCardRef.current) {
      tl.fromTo(
        leftCardRef.current,
        {
          y: 60,
          opacity: 0,
          filter: "blur(18px)",
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
        }
      ).fromTo(
        rightCardRef.current,
        {
          y: 60,
          opacity: 0,
          filter: "blur(18px)",
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          scale: 1,
          duration: 1.05,
          ease: "power3.out",
        },
        "-=0.85"
      );

      if (logoMarkRef.current) {
        tl.fromTo(
          logoMarkRef.current,
          {
            scale: 0.8,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.75,
            ease: "back.out(1.6)",
          },
          "-=0.6"
        );
      }
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        {/* Left Card: Cream / Ecru Minimal Identity */}
        <div 
          ref={leftCardRef}
          className="bg-[#F4F1EA] text-[#281D19] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-10 lg:p-14 min-h-[380px] sm:min-h-[480px] lg:min-h-[560px] flex flex-col justify-between select-none transition-transform duration-300 hover:scale-[1.005] will-change-[filter,transform,opacity]"
        >
          {/* Subtle minimal corner marker & SVG Asset download */}
          <div className="flex items-center justify-between">
            <div className="text-xs uppercase tracking-widest opacity-40 font-mono">
              01
            </div>
            <a
              href="/logo.svg"
              download="solo-dev-logo.svg"
              className="text-[11px] font-mono uppercase tracking-wider text-[#281D19]/50 hover:text-[#281D19] flex items-center gap-1.5 transition-colors py-1 px-2.5 rounded-full hover:bg-[#281D19]/5"
              title="Download Solo_DEV SVG Asset"
            >
              <IconDownload size={13} />
              <span>SVG</span>
            </a>
          </div>

          {/* Center Logo Mark + Wordmark */}
          <div 
            ref={logoMarkRef}
            className="my-auto flex items-center justify-center gap-3.5 sm:gap-6 py-8 sm:py-12"
          >
            {/* The Distinctive Rounded Square Mark with Circle Cutout - Clickable to Download */}
            <a
              href="/logo.svg"
              download="solo-dev-logo.svg"
              title="Click to download SVG"
              className="group relative w-14 h-14 sm:w-20 sm:h-20 shrink-0 cursor-pointer block focus:outline-none transition-transform active:scale-95"
            >
              <svg
                viewBox="0 0 256 256"
                className="w-full h-full drop-none transition-transform duration-300 group-hover:scale-105"
              >
                <path
                  fill="#281D19"
                  fillRule="evenodd"
                  d="M 76 0 L 180 0 A 76 76 0 0 1 256 76 L 256 180 A 76 76 0 0 1 180 256 L 76 256 A 76 76 0 0 1 0 180 L 0 76 A 76 76 0 0 1 76 0 Z M 76.8 153.6 A 25.6 25.6 0 1 0 76.8 204.8 A 25.6 25.6 0 1 0 76.8 153.6 Z"
                />
              </svg>
            </a>

            {/* Wordmark */}
            <div className="flex flex-col">
              <span className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
                SOLO
              </span>
              <span className="text-[11px] sm:text-sm tracking-[0.22em] sm:tracking-[0.25em] uppercase font-semibold opacity-70 mt-1">
                DEV STUDIO
              </span>
            </div>
          </div>

          {/* Bottom Meta Information */}
          <div className="text-xs sm:text-sm opacity-70">
            <p className="font-semibold text-[#281D19]">Gyimah Emmanuel O.</p>
            <p className="opacity-75">Full-Stack &amp; Web3 Engineer</p>
          </div>
        </div>

        {/* Right Card: Rich Espresso Card with Pure Oscilloscope */}
        <div 
          ref={rightCardRef}
          className="bg-[#281D19] text-[#F4F1EA] rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] p-6 sm:p-10 lg:p-12 min-h-[380px] sm:min-h-[480px] lg:min-h-[560px] flex items-center justify-center select-none transition-transform duration-300 hover:scale-[1.005] will-change-[filter,transform,opacity]"
        >
          {/* Oscilloscope Centerpiece */}
          <Oscilloscope />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
