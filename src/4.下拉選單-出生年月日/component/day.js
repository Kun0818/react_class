import React, { useState } from 'react'

function Day({ dataFromYear, dataFromMonth, setDataFromDay }) {
  const [day, setDay] = useState('')
  const days = new Date(dataFromYear, dataFromMonth, 0).getDate()
  //console.log(days)

  const dayList = []

  for (let i = 1; i <= days; i++) {
    dayList.push(i)
  }
  //console.log(dayList)
  return (
    <>
      <h1>日期</h1>
      <select
        value={day}
        onChange={(e) => {
          setDay(e.target.value)
          setDataFromDay(e.target.value)
        }}
      >
        <option value="">---請選擇---</option>
        {dayList.map((e, i) => {
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

export default Day
