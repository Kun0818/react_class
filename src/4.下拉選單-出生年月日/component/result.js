import React from 'react'

function Result({ dataFromYear, dataFromMonth, dataFromDay, setDataResult }) {
  return (
    <>
      <button
        onClick={() => {
          const adult = 18 * 362.25 * 24 * 60 * 60 * 1000
          const final = +new Date(
            `${dataFromYear}/${dataFromMonth}/${dataFromDay}`
          )
          const now = +new Date()
          const put = now - final
          //console.log(final)
          //console.log(now)
          //console.log(adult)
          //console.log(put)
          if (put > adult) {
            setDataResult('滿18歲')
          } else {
            setDataResult('未滿18歲')
          }
        }}
      >
        檢查
      </button>
    </>
  )
}

export default Result
