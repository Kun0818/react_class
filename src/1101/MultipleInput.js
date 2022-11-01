import { useState } from 'react'

function MultipleInput() {
  const [user, setUser] = useState({ username: '', password: '' })
  //true=呈現密碼 / false=隱藏密碼
  const [show, setShow] = useState(false)

  const handleFieldChange = (e) => {
    //computed property name
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }
  return (
    <>
      <label htmlFor="">帳號</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleFieldChange}
      />
      <label htmlFor="">密碼</label>
      <input
        type={show ? 'text' : 'password'}
        name="password"
        value={user.password}
        onChange={handleFieldChange}
      />
      <input
        type="checkbox"
        name="show"
        checked={show}
        onChange={() => {
          setShow(!show)
        }}
      />
      <label>顯示密碼</label>
    </>
  )
}

export default MultipleInput
