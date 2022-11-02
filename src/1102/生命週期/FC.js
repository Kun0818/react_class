import React, { useState, useEffect } from 'react'

function FC() {
  const [total, setTotal] = useState(0)

  //模擬componentDidMount
  useEffect(() => {
    console.log('模擬componentDidMount')
  }, [])

  //模擬componentDidMount+componentDidUpdate
  useEffect(() => {
    console.log('模擬componentDidUpdate')
  }, [total])

  //模擬componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('模擬componentWillUnmount')
    }
  }, [])

  return (
    <>
      {console.log('render')}
      <h1>函式型元件</h1>
      <h1
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        {total}
      </h1>
    </>
  )
}

export default FC
