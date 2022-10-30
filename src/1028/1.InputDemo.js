import React, { useState } from 'react'

function InputDemo() {
  const [inputText, setInputText] = useState('')

  return (
    <>
      <h1>可控表單元件</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <hr />
      <h1>不可控表單元件</h1>
      <input type="text" />
    </>
  )
}

export default InputDemo
