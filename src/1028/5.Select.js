import React, { useState } from 'react'

function Select() {
  //radio group

  const [pet, setPet] = useState('')

  const petOptions = ['狗', '貓', '金魚']

  return (
    <>
      <h1>下拉選擇(select)</h1>
      <select
        value={pet}
        onChange={(e) => {
          setPet(e.target.value)
        }}
      >
        <option value="">---請選擇---</option>
        {petOptions.map((e, i) => {
          return (
            <option value={e} key={i}>
              {e}
            </option>
          )
        })}
      </select>
    </>
  )
}

export default Select
