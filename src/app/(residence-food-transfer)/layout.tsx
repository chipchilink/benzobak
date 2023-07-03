'use client'

import * as NavBar from '@/app/components/NavBar'

const Item = (p: { href: string; children: string }) => {
  const isActive = NavBar.useActive(p.href, 1)

  return (
    <NavBar.Item href={p.href} isActive={isActive}>
      {p.children}
    </NavBar.Item>
  )
}

export default (p: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar.Container>
        <Item href="/residence">Проживание</Item>
        <Item href="/food">Питание</Item>
        <Item href="/transfer">Трансфер</Item>
      </NavBar.Container>
      {p.children}
    </>
  )
}
