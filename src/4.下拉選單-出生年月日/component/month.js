import React, { useState } from 'react'

function Month({ setDataFromMonth }) {
  const [month, setMonth] = useState('')

  const monthList = []

  for (let i = 1; i <= 12; i++) {
    monthList.push(i)
  }
  //console.log(monthList)

  return (
    <>
      <h1>月份</h1>
      <select
        value={month}
        onChange={(e) => {
          setMonth(e.target.value)
          setDataFromMonth(e.target.value)
        }}
      >
        <option value="">---請選擇---</option>
        {monthList.map((e, i) => {
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

export default Month
