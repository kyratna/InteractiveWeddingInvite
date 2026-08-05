import type { CSSProperties, ReactNode } from 'react'

export type Tone =
  | 'blush'
  | 'charcoal'
  | 'haldi'
  | 'mehendi'
  | 'sangeet'
  | 'wedding'
  | 'reception'

const TONE_GRADIENTS: Record<Tone, string> = {
  blush: 'linear-gradient(160deg, #f3d9d0 0%, #e3b7ad 45%, #c98f83 100%)',
  charcoal: 'linear-gradient(160deg, #3a332f 0%, #211d1b 60%, #171412 100%)',
  haldi: 'linear-gradient(160deg, #f6d488 0%, #e0a530 55%, #b97e1f 100%)',
  mehendi: 'linear-gradient(160deg, #a9bd8f 0%, #5c7a4a 55%, #3f5732 100%)',
  sangeet: 'linear-gradient(160deg, #3a1420 0%, #6e1f38 55%, #c9435c 100%)',
  wedding: 'linear-gradient(160deg, #fbeae6 0%, #e9c3ba 55%, #cf9a95 100%)',
  reception: 'linear-gradient(160deg, #2c2419 0%, #423318 55%, #8a6a24 100%)',
}

const TONES: Tone[] = [
  'blush',
  'charcoal',
  'haldi',
  'mehendi',
  'sangeet',
  'wedding',
  'reception',
]

const TONE_PATTERN: Record<Tone, (id: string) => ReactNode> = {
  blush: (id) => <PetalPattern id={id} />,
  charcoal: (id) => <SparklePattern id={id} />,
  haldi: (id) => <SunPattern id={id} />,
  mehendi: (id) => <LeafPattern id={id} />,
  sangeet: (id) => <SparklePattern id={id} />,
  wedding: (id) => <PetalPattern id={id} />,
  reception: (id) => <LightsPattern id={id} />,
}

/** Renders all pattern <defs> once, globally — mount near the app root. */
export function PhotoPatternDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>{TONES.map((t) => TONE_PATTERN[t](`pattern-${t}`))}</defs>
    </svg>
  )
}

function SunPattern({ id }: { id: string }) {
  return (
    <pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
      <circle cx="20" cy="20" r="2.2" fill="white" fillOpacity="0.35" />
      <circle cx="0" cy="0" r="1.4" fill="white" fillOpacity="0.2" />
      <circle cx="40" cy="0" r="1.4" fill="white" fillOpacity="0.2" />
      <circle cx="0" cy="40" r="1.4" fill="white" fillOpacity="0.2" />
      <circle cx="40" cy="40" r="1.4" fill="white" fillOpacity="0.2" />
    </pattern>
  )
}

function LeafPattern({ id }: { id: string }) {
  return (
    <pattern id={id} width="46" height="46" patternUnits="userSpaceOnUse">
      <path
        d="M23 8c8 4 8 14 0 30-8-16-8-26 0-30Z"
        fill="none"
        stroke="white"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
    </pattern>
  )
}

function SparklePattern({ id }: { id: string }) {
  return (
    <pattern id={id} width="50" height="50" patternUnits="userSpaceOnUse">
      <path
        d="M12 4 L13.5 10 L19 12 L13.5 14 L12 20 L10.5 14 L5 12 L10.5 10 Z"
        fill="white"
        fillOpacity="0.28"
      />
      <circle cx="38" cy="34" r="1.6" fill="white" fillOpacity="0.35" />
    </pattern>
  )
}

function PetalPattern({ id }: { id: string }) {
  return (
    <pattern id={id} width="44" height="44" patternUnits="userSpaceOnUse">
      <ellipse
        cx="22"
        cy="14"
        rx="6"
        ry="10"
        fill="white"
        fillOpacity="0.18"
        transform="rotate(20 22 14)"
      />
    </pattern>
  )
}

function LightsPattern({ id }: { id: string }) {
  return (
    <pattern id={id} width="34" height="20" patternUnits="userSpaceOnUse">
      <path d="M0 4 Q17 20 34 4" fill="none" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
      <circle cx="8" cy="9" r="1.8" fill="white" fillOpacity="0.55" />
      <circle cx="26" cy="9" r="1.8" fill="white" fillOpacity="0.55" />
    </pattern>
  )
}

const ICONS: Record<Tone, ReactNode> = {
  blush: (
    <path d="M24 40s-14-8.6-14-18.4C10 15 14 11 19 11c2.4 0 4.4 1.2 5 3 .6-1.8 2.6-3 5-3 5 0 9 4 9 10.6C38 31.4 24 40 24 40Z" />
  ),
  charcoal: (
    <path d="M24 8l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" />
  ),
  haldi: <circle cx="24" cy="24" r="9" />,
  mehendi: (
    <path d="M24 10c10 5 10 18 0 28-10-10-10-23 0-28Z" />
  ),
  sangeet: (
    <path d="M24 6l4 10 10 4-10 4-4 10-4-10-10-4 10-4 4-10Z" />
  ),
  wedding: (
    <path d="M16 30c0-8 4-14 8-16 4 2 8 8 8 16 0 4-4 6-8 6s-8-2-8-6Z" />
  ),
  reception: (
    <path d="M24 8v6M12 20h24M14 20l3 16h14l3-16M20 26h8" />
  ),
}

export function ToneIcon({
  tone,
  className = '',
  color = 'currentColor',
}: {
  tone: Tone
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <g fill={color} fillOpacity="0.9" stroke="none">
        {ICONS[tone]}
      </g>
    </svg>
  )
}

interface PhotoPlaceholderProps {
  tone: Tone
  shape?: 'arch' | 'rect' | 'polaroid' | 'full-bleed'
  filename: string
  caption?: string
  className?: string
  style?: CSSProperties
  /** Absolutely-fill the parent (for full-bleed backgrounds) instead of sizing via className. */
  fill?: boolean
}

export default function PhotoPlaceholder({
  tone,
  shape = 'rect',
  filename,
  caption,
  className = '',
  style,
  fill = false,
}: PhotoPlaceholderProps) {
  const shapeClass =
    shape === 'arch'
      ? 'rounded-t-[999px] rounded-b-2xl'
      : shape === 'polaroid'
        ? 'rounded-sm'
        : shape === 'full-bleed'
          ? ''
          : 'rounded-2xl'

  const positionClass = fill ? 'absolute inset-0 h-full w-full' : 'relative'
  const shadowClass = shape === 'full-bleed' ? '' : 'shadow-lg'

  return (
    <div
      className={`${positionClass} overflow-hidden ${shadowClass} ${shapeClass} ${className}`}
      style={{ background: TONE_GRADIENTS[tone], ...style }}
      role="img"
      aria-label={caption || filename}
    >
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <rect width="100%" height="100%" fill={`url(#pattern-${tone})`} />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <svg
          width="15%"
          viewBox="0 0 48 48"
          fill="none"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-sm"
        >
          <g fill="white" fillOpacity="0.9" stroke="none">
            {ICONS[tone]}
          </g>
        </svg>
      </div>
      <div className="absolute bottom-2 left-2 rounded bg-black/25 px-2 py-1 text-[9px] tracking-wide text-white/80 backdrop-blur-sm">
        📷 replace: {filename}
      </div>
      {caption && (
        <div className="absolute right-2 top-2 rounded bg-white/20 px-2 py-1 text-[9px] uppercase tracking-widest text-white/90 backdrop-blur-sm">
          {caption}
        </div>
      )}
    </div>
  )
}
