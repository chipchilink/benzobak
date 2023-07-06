import * as NavBar from '../components/NavBar'
import * as router from '../routers'

export default (p: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar.Container>
        <NavBar.Item href={router.residence}>Проживание</NavBar.Item>
        <NavBar.Item href={router.food}>Питание</NavBar.Item>
        <NavBar.Item href={router.transfer}>Трансфер</NavBar.Item>
      </NavBar.Container>
      {p.children}
    </>
  )
}
