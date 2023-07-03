import * as React from 'react'
import style from './Ripple.module.scss'

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  React.useLayoutEffect(() => {
    let bounce: any = null
    if (rippleCount > 0) {
      clearTimeout(bounce)

      bounce = setTimeout(() => {
        cleanUpFunction()
        clearTimeout(bounce)
      }, duration * 4)
    }

    return () => clearTimeout(bounce)
  }, [rippleCount, duration, cleanUpFunction])
}

interface IRiple {
  x: number
  y: number
  size: number
}

export const Ripple = (p: { color?: string }) => {
  const { color = '#fff' } = p
  const duration = 330

  const [rippleArray, setRippleArray] = React.useState<IRiple[]>(() => [])

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([])
  })

  const addRipple = (event: React.MouseEvent) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height
    const x = event.pageX - rippleContainer.x - size / 2
    const y = event.pageY - rippleContainer.y - size / 2
    const newRipple = {
      x,
      y,
      size,
    }

    setRippleArray([...rippleArray, newRipple])
  }

  const s = { '--color': color } as any

  return (
    <div className={style.container} onMouseDown={addRipple} style={s}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              key={'span' + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          )
        })}
    </div>
  )
}
