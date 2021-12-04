import React, { useRef, useEffect, ReactNode } from "react"
import { animated, useSpring } from "react-spring"

export interface ParallaxBoxProps {
  children: string | number | JSX.Element | JSX.Element[] | ReactNode
  depth?: number
}

const ParallaxBox: React.FC<ParallaxBoxProps> = ({ children, depth, ...props }) => {
  const pdepth = depth ?? 0.1
  const calc = (o: number) => `translateY(${o * pdepth}px)`

  const ref = useRef<any>()
  const [{ offset }, set] = useSpring(() => ({ offset: 0 }))

  const handleScroll = () => {
    const posY = ref.current.getBoundingClientRect().top
    const offset = window.pageYOffset - posY
    set({ offset })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <animated.div
      ref={ref}
      style={{
        transform: offset.to(calc),
        willChange: "transform"
      }}
      {...props}
    >
      {children}
    </animated.div>
  )
}

export default ParallaxBox
