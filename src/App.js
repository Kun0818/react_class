//import Counter from './1025/Counter'
//import JsxValue from './1026/JsxValue'
//import StudentList from './1026/StudentList'
import { examples } from './examples'
import { useState } from 'react'

function App() {
  const [displayIndex, setDisplayIndex] = useState(0)

  const selection = (
    <select
      value={displayIndex}
      onChange={(e) => {
        //注意要轉型資料型態,保持state資料型態一致
        setDisplayIndex(Number(e.target.value))
      }}
    >
      {examples.map((e, i) => {
        return (
          <option key={i} value={i}>
            {e.name}
          </option>
        )
      })}
    </select>
  )

  //動態元件語法,注意命名開頭英文一定要大寫
  const MyComponent = examples[displayIndex].component

  return (
    <>
      {selection}
      <hr />
      <MyComponent />
    </>
  )
}

export default App
