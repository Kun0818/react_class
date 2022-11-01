import { useState } from 'react'
import style from './TodoList.module.css'

function TodoList() {
  const [inputValue, setInputValue] = useState('')
  //處理要避開輸入法拼字用Enter的指標
  const [isComposition, setIsComposition] = useState(false)

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '買牛奶',
      completed: true,
      editing: false,
    },
    {
      id: 2,
      text: '吃珍珠',
      completed: false,
      editing: false,
    },
  ])

  const addTodo = (text) => {
    //id
    //1.用加入當下的時間微秒值(ps.不適合多人使用系統)
    //2.id是均是數字,可求出最大值後遞增
    //3.隨機產生函式庫,例如,uuid/nanoid等函式庫
    const newTodo = {
      id: Number(new Date()),
      text: text,
      completed: false,
      editing: false,
    }
    //加入輸入的文字到todos陣列中
    //三步驟的方式(拷貝->加入到新陣列中->設定回state)
    const newTodos = [newTodo, ...todos]

    setTodos(newTodos)

    //清空文字輸入框

    setInputValue('')
  }

  //用在某個property(屬性),為布林值,true/false互換
  const toggoleTodo = (id,property) => {
    //step1:拷貝出新的物件陣列
    
  }

  return (
    <>
      <h1>Todo待辦事項</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        //中文輸入法用
        onCompositionStart={() => {
          setIsComposition(true)
        }}
        onCompositionEnd={() => {
          setIsComposition(false)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && isComposition === false) {
            addTodo(e.target.value)
          }
        }}
      />
      <ul>
        {todos.map((e, i) => {
          return (
            <li
              key={e.id}
              className={
                e.completed ? `${style.completed}` : `${style.notcompleted}`
              }
            >
              <input
                type="checkbox"
                checked={e.completed}
                onChange={(e) => {
                  //step1: 拷貝出新的物件陣列
                  const newTodos = todos.map((e2, i2) => {
                    return { ...e2 }
                  })

                  //step2:在新的物件陣列上修改
                  newTodos[i].completed = !newTodos[i].completed

                  //step3:設定回state
                  setTodos(newTodos)
                }}
              />
              {e.text}
              <i
                className="fa-light fa-circle-xmark"
                onClick={() => {
                  //step1:拷貝出新的陣列物件
                  //step2:在新的物件陣列上修改
                  const newTodos = todos.filter((e2, i2) => {
                    return e.id !== e2.id
                  })

                  //step3:設定回state
                  setTodos(newTodos)
                }}
              ></i>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoList
