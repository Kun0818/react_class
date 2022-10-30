import React, { useState } from 'react'

function Radio() {
  //radio group

  const [gender, setGender] = useState('')

  const genderOptions = ['男', '女', '不提供']

  return (
    <>
      <h1>選項按鈕群組(radio group)</h1>
      {genderOptions.map((e, i) => {
        return (
          <div key={i}>
            <input
              type="radio"
              value={e}
              checked={gender === e}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            />
            <label htmlFor="">{e}</label>
          </div>
        )
      })}
    </>
  )
}

export default Radio
