import { useState } from 'react'
import './Menu.css'

function Menu() {
  const [activeText, setActiveText] = useState('')
  const menuItems = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {menuItems.map((e, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                setActiveText(e)
              }}
            >
              <a href="#/" className={activeText === e ? 'active' : ''}>
                {e}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Menu
