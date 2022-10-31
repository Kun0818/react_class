import React, { useState } from 'react'
function Bmi() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [result, setResult] = useState(0)

  return (
    <>
      <label htmlFor="">體重(公斤):</label>
      <br />
      <input
        type="number"
        value={weight === 0 ? '' : weight}
        onChange={(e) => {
          setWeight(+e.target.value) //+保持state的資料類型一致是數字
        }}
      />
      <br />
      <label htmlFor="">身高(公分):</label>
      <br />
      <input
        type="number"
        value={height === 0 ? '' : height}
        onChange={(e) => {
          setHeight(+e.target.value)
        }}
      />
      <br />
      <label htmlFor="">BMI:</label>
      <br />
      <input type="number" value={result === 0 ? '' : result.toFixed(1)} />
      {/* toFixed格式化數字用,保留一位小數之後四捨五入 */}
      <button
        onClick={() => {
          setResult(weight / Math.pow(height / 100, 2))
        }}
      >
        提交
      </button>
    </>
  )
}

export default Bmi
