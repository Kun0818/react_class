import JsxValue from './1026/JsxValue'
import Counter from './1025/Counter'
import StudentList from './1026/StudentList'
import Menu from './1.選單項目/Menu'
import Demo from './2.物件陣列處理練習/Demo'
import Parent from './1027/1.props-基礎範例/Parent'
import Parent_C_P from './1027/5.props-三種資料流-C-P/Parent'
import InputDemo from './1028/1.InputDemo'
import Radio from './1028/3.Radio'
import Checkbox from './1028/4.Ckeckbox'
import Select from './1028/5.Select'
import Bmi from './3.BMI線上表單/BMI'
import Birthday from './4.下拉選單-出生年月日/Birthday'

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
  {
    name: '1027 props屬性',
    path: './1027/Parent.js',
    component: Parent,
  },
  {
    name: '1027 props-三種資料流-C-P',
    path: './1027/Parent.js',
    component: Parent_C_P,
  },
  {
    name: '1028 可控不可控表單元件',
    path: './1027/Parent.js',
    component: InputDemo,
  },
  {
    name: '1028 radio不可控表單元件',
    path: './1027/Parent.js',
    component: Radio,
  },
  {
    name: '1028 checkbox不可控表單元件',
    path: './1027/Parent.js',
    component: Checkbox,
  },
  {
    name: '1028 select不可控表單元件',
    path: './1027/Parent.js',
    component: Select,
  },
  {
    name: 'BMI線上表單',
    path: './1027/Parent.js',
    component: Bmi,
  },
  {
    name: '下拉選單-出生年月日',
    path: './1027/Parent.js',
    component: Birthday,
  },
]
