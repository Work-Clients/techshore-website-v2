/** Section wrapper — no nested motion to avoid double-animation jank */
export default function AnimatedSection({ children, className = '', id, as: Component = 'section' }) {
  return (
    <Component id={id} className={`relative z-10 ${className}`}>
      {children}
    </Component>
  )
}
