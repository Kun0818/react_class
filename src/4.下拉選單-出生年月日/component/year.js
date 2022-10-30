import React, { useState } from 'react'

function Year({ setDataFromYear }) {
  const [year, setYear] = useState('')

  const yearList = []

  for (let i = 1920; i <= 2010; i++) {
    yearList.push(i)
  }
  //console.log(yearList)
  return (
    <>
      {' '}
      <h1>西元年</h1>
      <select
        value={year}
        onChange={(e) => {
          setYear(e.target.value)
          setDataFromYear(e.target.value)
        }}
      >
        <option value="">---請選擇---</option>
        {yearList.map((e, i) => {
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

export default Year
