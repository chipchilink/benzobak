import { useLocation } from 'react-router-dom'

export const useActive = (href: string, level: number) => {
  const { pathname } = useLocation()
  const current = pathname.split('/')[level]
  const self = href.split('/')[level]
  return current === self
}
