import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function LayoutAuth() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}
export default LayoutAuth