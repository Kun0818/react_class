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
        value={weight}
        onChange={(e) => {
          setWeight(e.target.value)
        }}
      />
      <br />
      <label htmlFor="">身高(公分):</label>
      <br />
      <input
        type="number"
        value={height}
        onChange={(e) => {
          setHeight(e.target.value)
        }}
      />
      <br />
      <label htmlFor="">BMI:</label>
      <br />
      <input type="number" value={result} />
      <button
        onClick={(e) => {
          setResult(Math.round(weight / Math.pow(height / 100, 2)))
        }}
      >
        提交
      </button>
    </>
  )
}

export default Bmi
