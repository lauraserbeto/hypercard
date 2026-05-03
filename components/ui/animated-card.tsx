"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useTransform, useSpring, animate } from "framer-motion"

interface AnimatedCardProps {
  className?: string
  interactive?: boolean
  size?: "sm" | "md" | "lg"
}

// Particle component for floating dots
function Particle({ delay, duration, startX, startY }: {
  delay: number
  duration: number
  startX: number
  startY: number
}) {
  return (
    <motion.div
      className="absolute w-[2px] h-[2px] rounded-full bg-white/60"
      style={{ left: `${startX}%`, top: `${startY}%` }}
      animate={{
        y: [0, -30, -60],
        x: [0, Math.random() * 20 - 10],
        opacity: [0, 0.8, 0],
        scale: [0, 1.2, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
        ease: "easeOut",
      }}
    />
  )
}

export function AnimatedCard({ className = "", interactive = true, size = "md" }: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [12, -12]), { stiffness: 150, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), { stiffness: 150, damping: 20 })

  // Shimmer position follows mouse
  const shimmerX = useTransform(mouseX, [0, 1], [0, 100])
  const shimmerY = useTransform(mouseY, [0, 1], [0, 100])

  // Holographic shimmer background - computed at top level (not inside JSX)
  const shimmerBackground = useTransform(
    [shimmerX, shimmerY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.25) 0%, rgba(200,200,255,0.1) 25%, rgba(255,200,255,0.05) 50%, transparent 70%)`
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-rotate when not hovered
  useEffect(() => {
    if (!interactive || isHovered) return
    const controls = animate(mouseX, [0.3, 0.7, 0.5, 0.3], {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    })
    const controlsY = animate(mouseY, [0.4, 0.6, 0.4], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    })
    return () => {
      controls.stop()
      controlsY.stop()
    }
  }, [interactive, isHovered, mouseX, mouseY])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !interactive) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    animate(mouseX, 0.5, { duration: 0.6 })
    animate(mouseY, 0.5, { duration: 0.6 })
  }

  const sizeClasses = {
    sm: "w-[260px] h-[164px]",
    md: "w-[340px] md:w-[400px] h-[215px] md:h-[253px]",
    lg: "w-[380px] md:w-[460px] h-[240px] md:h-[290px]",
  }

  // Generate particles
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.4,
    duration: 2 + Math.random() * 2,
    startX: 10 + Math.random() * 80,
    startY: 20 + Math.random() * 60,
  }))

  if (!mounted) return <div className={`${sizeClasses[size]} ${className}`} />

  return (
    <div
      className={`relative ${className}`}
      style={{ perspective: "1200px" }}
    >
      {/* Ambient glow behind card */}
      <motion.div
        className="absolute -inset-12 rounded-[60px] -z-10"
        animate={{
          background: [
            "radial-gradient(ellipse at 40% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse at 60% 60%, rgba(255,255,255,0.08) 0%, transparent 70%)",
            "radial-gradient(ellipse at 40% 40%, rgba(255,255,255,0.06) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ filter: "blur(40px)" }}
      />

      <motion.div
        ref={cardRef}
        className={`relative ${sizeClasses[size]} cursor-pointer`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Card body */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 25%, #16162a 50%, #0a0a14 75%, #1a1a2e 100%)",
            boxShadow: `
              0 0 0 1px rgba(255,255,255,0.08),
              0 25px 80px rgba(0,0,0,0.8),
              0 5px 20px rgba(0,0,0,0.5),
              inset 0 1px 0 rgba(255,255,255,0.08)
            `,
          }}
        >
          {/* Metallic grain texture */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Holographic shimmer overlay */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: shimmerBackground,
            }}
          />

          {/* Animated rainbow refraction */}
          <motion.div
            className="absolute inset-0 mix-blend-overlay"
            animate={{
              background: [
                "linear-gradient(135deg, rgba(120,120,255,0.08) 0%, rgba(255,120,200,0.06) 30%, rgba(120,255,200,0.04) 60%, transparent 100%)",
                "linear-gradient(225deg, rgba(255,120,120,0.06) 0%, rgba(120,200,255,0.08) 30%, rgba(255,255,120,0.04) 60%, transparent 100%)",
                "linear-gradient(315deg, rgba(200,120,255,0.08) 0%, rgba(120,255,120,0.06) 30%, rgba(255,200,120,0.04) 60%, transparent 100%)",
                "linear-gradient(135deg, rgba(120,120,255,0.08) 0%, rgba(255,120,200,0.06) 30%, rgba(120,255,200,0.04) 60%, transparent 100%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          {/* Circuit pattern lines */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.06]"
            viewBox="0 0 400 253"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 80 H120 L140 60 H260 L280 80 H400"
              stroke="white"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M0 170 H80 L100 150 H300 L320 170 H400"
              stroke="white"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1, ease: "easeInOut" }}
            />
            <motion.path
              d="M200 0 V60 L220 80 V173 L200 193 V253"
              stroke="white"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
            />
            {/* Small circuit nodes */}
            <motion.circle cx="140" cy="60" r="2" fill="white" fillOpacity="0.3"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 2, duration: 0.3 }}
            />
            <motion.circle cx="280" cy="80" r="2" fill="white" fillOpacity="0.3"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 2.2, duration: 0.3 }}
            />
            <motion.circle cx="100" cy="150" r="2" fill="white" fillOpacity="0.3"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 2.4, duration: 0.3 }}
            />
            <motion.circle cx="320" cy="170" r="2" fill="white" fillOpacity="0.3"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 2.6, duration: 0.3 }}
            />
          </svg>

          {/* NFC Chip */}
          <div className="absolute top-[28%] left-[8%] w-[48px] h-[36px]">
            {/* Chip body */}
            <div
              className="absolute inset-0 rounded-md"
              style={{
                background: "linear-gradient(135deg, #c9b06b 0%, #f0d78c 30%, #b89d5b 60%, #dfc172 100%)",
                boxShadow: "inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 1px rgba(0,0,0,0.2)",
              }}
            />
            {/* Chip lines */}
            <div className="absolute inset-[3px] rounded-sm border border-[#a08940]/40">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#a08940]/30" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#a08940]/30" />
            </div>
            {/* NFC Pulse rings */}
            <motion.div
              className="absolute -right-3 top-1/2 -translate-y-1/2"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute border border-white/20 rounded-full"
                  style={{
                    width: `${8 + i * 6}px`,
                    height: `${8 + i * 6}px`,
                    top: `${-(4 + i * 3)}px`,
                    left: `${-(4 + i * 3)}px`,
                  }}
                  animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.1, 0.8] }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Contactless icon */}
          <div className="absolute top-[22%] right-[8%]">
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-white/25"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.path
                d="M6.5 17C4.5 15 4.5 9 6.5 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.path
                d="M10 15C8.8 13.5 8.8 10.5 10 9"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              <motion.path
                d="M13.5 13C13 12.2 13 11.8 13.5 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
            </motion.svg>
          </div>

          {/* Card number (last 4 dots + digits) */}
          <div className="absolute bottom-[32%] left-[8%] flex items-center gap-3">
            {["••••", "••••", "••••"].map((group, i) => (
              <motion.span
                key={i}
                className="font-mono text-[11px] tracking-[0.2em] text-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
              >
                {group}
              </motion.span>
            ))}
            <motion.span
              className="font-mono text-[13px] tracking-[0.2em] text-white/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.65, duration: 0.5 }}
            >
              7290
            </motion.span>
          </div>

          {/* Card brand name */}
          <motion.div
            className="absolute bottom-[12%] left-[8%]"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span
              className="font-serif text-[18px] tracking-[0.35em] uppercase text-white/50"
              style={{
                textShadow: "0 0 20px rgba(255,255,255,0.1)",
              }}
            >
              HyperCard
            </span>
          </motion.div>

          {/* Cardholder name */}
          <motion.div
            className="absolute bottom-[12%] right-[8%]"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/25">
              Black Edition
            </span>
          </motion.div>

          {/* Scanning laser line */}
          <motion.div
            className="absolute left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.15) 80%, transparent 100%)",
              boxShadow: "0 0 8px rgba(255,255,255,0.2), 0 0 20px rgba(255,255,255,0.1)",
            }}
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Edge glow on hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            animate={{
              boxShadow: isHovered
                ? "inset 0 0 30px rgba(255,255,255,0.05), 0 0 40px rgba(255,255,255,0.05)"
                : "inset 0 0 0px rgba(255,255,255,0), 0 0 0px rgba(255,255,255,0)",
            }}
            transition={{ duration: 0.4 }}
          />

          {/* Top edge highlight */}
          <div
            className="absolute top-0 left-[10%] right-[10%] h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          {particles.map((p) => (
            <Particle key={p.id} {...p} />
          ))}
        </div>

        {/* Reflection/shadow below card */}
        <div
          className="absolute -bottom-8 left-[5%] right-[5%] h-16 rounded-full -z-10"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />
      </motion.div>
    </div>
  )
}
