import SectionGeometry from './SectionGeometry'

/** Section wrapper — no nested motion to avoid double-animation jank */
export default function AnimatedSection({ children, className = '', id, as: Component = 'section', geometry }) {
  return (
    <Component id={id} className={`relative overflow-hidden ${className}`}>
      {geometry && <SectionGeometry variant={geometry} />}
      {children}
    </Component>
  )
}
