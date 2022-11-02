import { useState } from 'react'

function HtmlForm() {
  const [user, setUser] = useState({ username: '', password: '' })

  //紀錄欄位有錯誤的訊息
  const [fieldErrors, setFieldErrors] = useState({ username: '', password: '' })
  //true=呈現密碼 / false=隱藏密碼
  const [show, setShow] = useState(false)

  const handleFieldChange = (e) => {
    //computed property name
    const newUser = { ...user, [e.target.name]: e.target.value }

    setUser(newUser)
  }

  const handleFormSubmit = (e) => {
    //阻擋預設form送出的行為
    e.preventDefault()

    //得到輸入值的方式
    //第一種,從state直接得到
    console.log(user)
    //第二種,用FormDate物件
    const formData = new FormData(e.target)
    console.log(formData.get('username'), formData.get('password'))

    //其他驗證

    //送到伺服器
  }

  const handleFormInvalid = (e) => {
    //阻擋預設行為-關閉泡泡訊息
    e.preventDefault()

    setFieldErrors({
      ...fieldErrors,
      [e.target.name]: e.target.validationMessage,
    })
  }
  return (
    <>
      <form action="" onSubmit={handleFormSubmit} onInvalid={handleFormInvalid}>
        <label htmlFor="">帳號</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleFieldChange}
          required
        />
        <span>{fieldErrors.username}</span>
        <br />
        <label htmlFor="">密碼</label>

        <input
          type={show ? 'text' : 'password'}
          name="password"
          value={user.password}
          onChange={handleFieldChange}
          required
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
        <br />
        {/* 沒加type相當於type='submit' */}
        <button type="submit">送出</button>
        <button
          type="button"
          onClick={() => {
            setUser({
              username: 'kunda',
              password: 1234,
            })
          }}
        >
          填入
        </button>
      </form>
    </>
  )
}

export default HtmlForm
