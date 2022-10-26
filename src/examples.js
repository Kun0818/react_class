import JsxValue from './1026/JsxValue'
import Counter from './1025/Counter'
import StudentList from './1026/StudentList'
import Menu from './1.選單項目/Menu'
import Demo from './2.物件陣列處理練習/Demo'

export const examples = [
  { name: '1025-1 計數器', path: './1025/Counter.js', component: Counter },
  {
    name: '1026-1 JSX中的值與表達式',
    path: './1026/JsxValue.js',
    component: JsxValue,
  },
  {
    name: '1026-2 學生列表清單',
    path: './1025/Counter.js',
    component: StudentList,
  },
  {
    name: '選單項目',
    path: './1.選單項目/Menu.js',
    component: Menu,
  },
  {
    name: '陣列處理',
    path: './2.物件陣列處理練習/Demo.js',
    component: Demo,
  },
]
