"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion"

// ─── Individual card in the fan ───
interface FanCardProps {
  index: number
  total: number
  variant: "platinum" | "black" | "gold"
  zIndex: number
  delay: number
}

const cardVariants = {
  platinum: {
    bg: "linear-gradient(135deg, #e8e8ee 0%, #c4c4d0 20%, #f0f0f6 40%, #b8b8c8 60%, #dcdce6 80%, #e8e8ee 100%)",
    chipBg: "linear-gradient(135deg, #c9b06b 0%, #f0d78c 30%, #b89d5b 60%, #dfc172 100%)",
    label: "Platinum",
    numberSuffix: "4821",
    textColor: "rgba(30,30,50,0.6)",
    textColorDim: "rgba(30,30,50,0.3)",
    brandColor: "rgba(30,30,50,0.5)",
    edgeHighlight: "rgba(255,255,255,0.6)",
    shimmer: "rgba(255,255,255,0.4)",
  },
  black: {
    bg: "linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 25%, #16162a 50%, #0a0a14 75%, #1a1a2e 100%)",
    chipBg: "linear-gradient(135deg, #c9b06b 0%, #f0d78c 30%, #b89d5b 60%, #dfc172 100%)",
    label: "Black Edition",
    numberSuffix: "7290",
    textColor: "rgba(255,255,255,0.45)",
    textColorDim: "rgba(255,255,255,0.2)",
    brandColor: "rgba(255,255,255,0.5)",
    edgeHighlight: "rgba(255,255,255,0.12)",
    shimmer: "rgba(255,255,255,0.25)",
  },
  gold: {
    bg: "linear-gradient(135deg, #2a1f0e 0%, #3d2b10 20%, #4a3515 40%, #2e2210 60%, #3d2b10 80%, #2a1f0e 100%)",
    chipBg: "linear-gradient(135deg, #f0d78c 0%, #ffe6a0 30%, #c9b06b 60%, #f0d78c 100%)",
    label: "Gold Reserve",
    numberSuffix: "1058",
    textColor: "rgba(240,215,140,0.6)",
    textColorDim: "rgba(240,215,140,0.3)",
    brandColor: "rgba(240,215,140,0.55)",
    edgeHighlight: "rgba(240,215,140,0.15)",
    shimmer: "rgba(240,215,140,0.2)",
  },
}

function FanCard({ index, total, variant, zIndex, delay }: FanCardProps) {
  const style = cardVariants[variant]
  const isCenter = index === Math.floor(total / 2)

  // Fan spread responsive logic
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Fan spread values (Mobile vs Desktop)
  const fanAngles = isMobile ? [-10, 0, 10] : [-18, 0, 15]
  const fanX = isMobile ? [-40, 0, 40] : [-80, 0, 70]
  const fanY = isMobile ? [10, 0, 8] : [20, 0, 15]
  const angle = fanAngles[index] ?? 0
  const offsetX = fanX[index] ?? 0
  const offsetY = fanY[index] ?? 0

  return (
    <motion.div
      className="absolute"
      style={{
        zIndex,
        width: "100%",
        height: "100%",
        transformOrigin: "center bottom",
      }}
      initial={{
        opacity: 0,
        y: 100,
        x: 0,
        rotate: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: isCenter ? 1 : 0.75,
        y: offsetY,
        x: offsetX,
        rotate: angle,
        scale: isCenter ? 1 : 0.92,
      }}
      transition={{
        duration: 1.2,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {/* Card Surface */}
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background: style.bg,
          boxShadow: isCenter
            ? `0 0 0 1px ${style.edgeHighlight},
               0 40px 100px rgba(0,0,0,0.6),
               0 15px 40px rgba(0,0,0,0.4)`
            : `0 0 0 1px ${style.edgeHighlight},
               0 20px 60px rgba(0,0,0,0.5)`,
        }}
      >
        {/* Metallic grain */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Shimmer sweep — only on the center card */}
        {isCenter && (
          <motion.div
            className="absolute inset-0"
            style={{ overflow: "hidden" }}
          >
            <motion.div
              className="absolute h-full w-[60%]"
              style={{
                background: `linear-gradient(105deg, transparent 30%, ${style.shimmer} 50%, transparent 70%)`,
                filter: "blur(8px)",
              }}
              animate={{ x: ["-100%", "250%"] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}

        {/* Rainbow refraction for center card */}
        {isCenter && (
          <motion.div
            className="absolute inset-0 mix-blend-overlay"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(120,120,255,0.06) 0%, rgba(255,120,200,0.04) 50%, transparent 100%)",
                "linear-gradient(225deg, rgba(255,120,120,0.04) 0%, rgba(120,200,255,0.06) 50%, transparent 100%)",
                "linear-gradient(315deg, rgba(200,120,255,0.06) 0%, rgba(120,255,120,0.04) 50%, transparent 100%)",
                "linear-gradient(135deg, rgba(120,120,255,0.06) 0%, rgba(255,120,200,0.04) 50%, transparent 100%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* NFC Chip */}
        <div className="absolute top-[26%] left-[8%] w-[40px] h-[30px]">
          <div
            className="absolute inset-0 rounded-[4px]"
            style={{
              background: style.chipBg,
              boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.15)",
            }}
          />
          <div className="absolute inset-[2px] rounded-[3px] border border-[#a08940]/30">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-[#a08940]/25" />
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#a08940]/25" />
          </div>
        </div>

        {/* Contactless icon */}
        <div className="absolute top-[20%] right-[8%]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6.5 17C4.5 15 4.5 9 6.5 7" stroke={style.textColorDim} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10 15C8.8 13.5 8.8 10.5 10 9" stroke={style.textColorDim} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13.5 13C13 12.2 13 11.8 13.5 11" stroke={style.textColorDim} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        {/* Card number dots */}
        <div className="absolute bottom-[32%] left-[8%] flex items-center gap-2.5">
          {["••••", "••••", "••••"].map((group, i) => (
            <span
              key={i}
              className="font-mono text-[10px] tracking-[0.15em]"
              style={{ color: style.textColorDim }}
            >
              {group}
            </span>
          ))}
          <span
            className="font-mono text-[11px] tracking-[0.15em]"
            style={{ color: style.textColor }}
          >
            {style.numberSuffix}
          </span>
        </div>

        {/* Brand name */}
        <div className="absolute bottom-[12%] left-[8%]">
          <span
            className="font-serif text-[15px] tracking-[0.3em] uppercase"
            style={{ color: style.brandColor }}
          >
            HyperCard
          </span>
        </div>

        {/* Edition label */}
        <div className="absolute bottom-[12%] right-[8%]">
          <span
            className="font-mono text-[8px] tracking-[0.2em] uppercase"
            style={{ color: style.textColorDim }}
          >
            {style.label}
          </span>
        </div>

        {/* Top edge highlight line */}
        <div
          className="absolute top-0 left-[10%] right-[10%] h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${style.edgeHighlight}, transparent)`,
          }}
        />
      </div>
    </motion.div>
  )
}

// ─── Orbital particle around the fan ───
function OrbitalParticle({ index, total }: { index: number; total: number }) {
  const angle = (360 / total) * index
  const radius = 260 + Math.random() * 40
  const duration = 12 + Math.random() * 8
  const size = 1 + Math.random() * 2

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        top: "50%",
        left: "50%",
        opacity: 0,
      }}
      animate={{
        opacity: [0, 0.4, 0.6, 0.4, 0],
        x: [
          Math.cos((angle * Math.PI) / 180) * radius,
          Math.cos(((angle + 120) * Math.PI) / 180) * radius,
          Math.cos(((angle + 240) * Math.PI) / 180) * radius,
          Math.cos(((angle + 360) * Math.PI) / 180) * radius,
        ],
        y: [
          Math.sin((angle * Math.PI) / 180) * radius * 0.4,
          Math.sin(((angle + 120) * Math.PI) / 180) * radius * 0.4,
          Math.sin(((angle + 240) * Math.PI) / 180) * radius * 0.4,
          Math.sin(((angle + 360) * Math.PI) / 180) * radius * 0.4,
        ],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay: index * 0.5,
        ease: "linear",
      }}
    />
  )
}

// ─── Main Hero Card Fan ───
export function HeroCardFan({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), { stiffness: 80, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 80, damping: 25 })

  useEffect(() => {
    setMounted(true)
  }, [])

  // Gentle idle sway
  useEffect(() => {
    const ctrlX = animate(mouseX, [0.4, 0.6, 0.5, 0.4], {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    })
    const ctrlY = animate(mouseY, [0.45, 0.55, 0.45], {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    })
    return () => { ctrlX.stop(); ctrlY.stop() }
  }, [mouseX, mouseY])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  if (!mounted) return <div className={`h-[300px] md:h-[340px] ${className}`} />

  const cards: { variant: FanCardProps["variant"]; z: number; delay: number }[] = [
    { variant: "platinum", z: 1, delay: 0.8 },
    { variant: "black", z: 3, delay: 0.5 },
    { variant: "gold", z: 2, delay: 0.9 },
  ]

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "1400px" }}
      onMouseMove={handleMouseMove}
    >
      {/* Deep ambient glow */}
      <motion.div
        className="absolute -inset-20 rounded-full -z-10"
        animate={{
          background: [
            "radial-gradient(ellipse at 45% 50%, rgba(255,255,255,0.05) 0%, rgba(200,200,255,0.02) 40%, transparent 70%)",
            "radial-gradient(ellipse at 55% 50%, rgba(255,255,255,0.07) 0%, rgba(255,200,220,0.02) 40%, transparent 70%)",
            "radial-gradient(ellipse at 45% 50%, rgba(255,255,255,0.05) 0%, rgba(200,200,255,0.02) 40%, transparent 70%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(60px)" }}
      />

      {/* Second glow layer for richness */}
      <motion.div
        className="absolute -inset-12 rounded-full -z-10"
        animate={{
          background: [
            "radial-gradient(ellipse at 50% 60%, rgba(200,180,130,0.04) 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 40%, rgba(200,180,130,0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse at 50% 60%, rgba(200,180,130,0.04) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ filter: "blur(40px)" }}
      />

      {/* Orbital particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }, (_, i) => (
          <OrbitalParticle key={i} index={i} total={10} />
        ))}
      </div>

      {/* Fan container - the whole fan tilts together */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-[280px] sm:w-[340px] md:w-[440px] h-[180px] sm:h-[215px] md:h-[278px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {cards.map((card, i) => (
          <FanCard
            key={card.variant}
            index={i}
            total={cards.length}
            variant={card.variant}
            zIndex={card.z}
            delay={card.delay}
          />
        ))}

        {/* Center card scanning laser */}
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{
            zIndex: 4,
            background: "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 70%, transparent 90%)",
            boxShadow: "0 0 12px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.08)",
          }}
          animate={{ top: ["10%", "90%", "10%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      {/* Floor reflection */}
      <motion.div
        className="absolute -bottom-6 left-[5%] right-[5%] h-20 -z-10"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)",
          filter: "blur(16px)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Status indicator dots below the fan */}
      <motion.div
        className="flex justify-center gap-2 mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.variant}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: i === 1
                ? "rgba(255,255,255,0.5)"
                : "rgba(255,255,255,0.15)",
            }}
            animate={i === 1 ? { scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>
    </div>
  )
}
