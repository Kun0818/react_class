import React, { useState } from 'react'
import Year from './component/year'
import styled from 'styled-components'
import Month from './component/month'
import Day from './component/day'
import Result from './component/result'

function Birthday() {
  const [dataFromYear, setDataFromYear] = useState('')
  const [dataFromMonth, setDataFromMonth] = useState('')
  const [dataFromDay, setDataFromDay] = useState('')
  const [dataResult, setDataResult] = useState('')

  const Answer = styled.div`
    background-color: ${dataResult === '滿18歲' ? 'green' : 'red'};
  `

  return (
    <>
      <Year setDataFromYear={setDataFromYear} />
      <Month setDataFromMonth={setDataFromMonth} />
      <Day
        dataFromYear={dataFromYear}
        dataFromMonth={dataFromMonth}
        setDataFromDay={setDataFromDay}
      />
      <Result
        dataFromYear={dataFromYear}
        dataFromMonth={dataFromMonth}
        dataFromDay={dataFromDay}
        setDataResult={setDataResult}
      />

      <hr />
      <Answer>{dataResult}</Answer>
    </>
  )
}

export default Birthday
