const GRID_CLASS =
  'absolute inset-0 bg-[linear-gradient(to_right,#0a163008_1px,transparent_1px),linear-gradient(to_bottom,#0a163008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]'

const DOTS_CLASS =
  'absolute bg-[radial-gradient(circle,#0a163012_1.5px,transparent_1.5px)] bg-[size:14px_14px] opacity-50'

const GLOWS = [
  'absolute top-[4%] -left-40 w-[28rem] h-[28rem] bg-accent-gold/10 rounded-full blur-3xl',
  'absolute top-[18%] -right-32 w-96 h-96 bg-primary-navy/[0.06] rounded-full blur-3xl',
  'absolute top-[38%] left-1/4 w-80 h-80 bg-accent-gold/8 rounded-full blur-3xl',
  'absolute top-[52%] -left-32 w-[28rem] h-[28rem] bg-primary-navy/[0.06] rounded-full blur-3xl',
  'absolute top-[68%] -right-40 w-[32rem] h-[32rem] bg-accent-gold/10 rounded-full blur-3xl',
  'absolute top-[82%] left-0 w-96 h-96 bg-primary-navy/[0.07] rounded-full blur-3xl',
  'absolute top-[94%] -right-24 w-80 h-80 bg-accent-gold/8 rounded-full blur-3xl',
]

const SHAPES = [
  'absolute top-[6%] -right-12 w-56 h-56 bg-accent-gold/[0.07] rotate-45 rounded-3xl',
  'absolute top-[8%] left-1/4 w-20 h-20 bg-primary-navy/[0.04] rotate-12 rounded-xl',
  'absolute top-[14%] left-8 w-28 h-28 rounded-full border-[3px] border-primary-navy/[0.07]',
  'absolute top-[22%] left-1/4 w-44 h-44 border-2 border-accent-gold/[0.12] rotate-12 rounded-3xl',
  'absolute top-[28%] -left-8 w-24 h-24 rounded-full bg-primary-navy/[0.05]',
  'absolute top-[34%] right-16 w-32 h-32 bg-accent-gold/[0.06] -rotate-6 rounded-2xl',
  'absolute top-[40%] left-12 w-14 h-14 bg-accent-gold/[0.12] rounded-full',
  'absolute top-[44%] -left-10 w-52 h-52 bg-primary-navy/[0.04] -rotate-12 rounded-3xl',
  'absolute top-[48%] right-10 w-36 h-36 border-2 border-accent-gold/[0.14] rotate-45 rounded-2xl',
  'absolute top-[54%] right-1/4 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-primary-navy/[0.05]',
  'absolute top-[58%] left-1/3 w-16 h-16 border-2 border-primary-navy/[0.08] rotate-45',
  'absolute top-[62%] left-8 w-40 h-40 bg-primary-navy/[0.04] rotate-[30deg] rounded-2xl',
  'absolute top-[66%] right-20 w-24 h-24 rounded-full border-[3px] border-accent-gold/[0.12]',
  'absolute top-[72%] left-1/3 w-28 h-28 border-2 border-primary-navy/[0.08] -rotate-12 rounded-xl',
  'absolute top-[76%] right-1/3 w-12 h-12 bg-accent-gold/[0.1] rotate-45',
  'absolute top-[84%] -right-6 w-48 h-48 bg-accent-gold/[0.06] rotate-12 rounded-3xl',
  'absolute top-[88%] left-10 w-32 h-32 rounded-full border-2 border-accent-gold/[0.14]',
  'absolute top-[92%] left-1/2 w-20 h-20 border-2 border-primary-navy/[0.08] rotate-[20deg] rounded-lg',
]

const DOT_CLUSTERS = [
  'absolute top-[5%] right-1/4 w-40 h-40',
  'absolute top-[32%] left-16 w-44 h-44',
  'absolute top-[50%] right-1/3 w-36 h-36',
  'absolute top-[70%] left-12 w-48 h-48',
  'absolute top-[88%] right-16 w-40 h-40',
]

export default function SectionGeometry() {
  return (
    <div
      className="absolute inset-0 pointer-events-none bg-gradient-to-b from-bg-main via-accent-gold/[0.03] to-primary-navy/[0.04]"
      aria-hidden="true"
    >
      <div className={GRID_CLASS} />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_30%,#dfb15b05_50%,transparent_70%)]" />
      {DOT_CLUSTERS.map((className) => (
        <div key={className} className={`${DOTS_CLASS} ${className}`} />
      ))}
      {GLOWS.map((className) => (
        <div key={className} className={className} />
      ))}
      {SHAPES.map((className) => (
        <div key={className} className={className} />
      ))}
    </div>
  )
}
