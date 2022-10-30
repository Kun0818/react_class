import React, { useState } from 'react'

function Checkbox() {
  //checkbox single

  const [agree, setAgree] = useState('')

  //checkbox group

  const [likeList, setLikeList] = useState('')

  const fruitOptions = ['芒果', '蘋果', '香蕉']

  return (
    <>
      <h1>核取方塊(checkbox single)</h1>
      <input
        type="checkbox"
        checked={agree}
        onChange={(e) => {
          setAgree(e.target.checked)
        }}
      />
      <label htmlFor="">我同意會員註冊條款</label>
      <hr />
      <h1>核取方塊群組(checkbox group)</h1>
      {fruitOptions.map((e, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              value={e}
              checked={likeList.includes(e)}
              onChange={(e) => {
                const value = e.target.value
                if (likeList.includes(value)) {
                  //如果此項目值在state陣列中->移出state陣列
                  const newLikeList = likeList.filter((v2, i2) => v2 !== value)
                  setLikeList(newLikeList)
                } else {
                  //如果不在此state陣列中->加到state陣列中
                  const newLikeList = [value, ...likeList]
                  setLikeList(newLikeList)
                }
              }}
            />
            <label htmlFor="">{e}</label>
          </div>
        )
      })}
    </>
  )
}

export default Checkbox
