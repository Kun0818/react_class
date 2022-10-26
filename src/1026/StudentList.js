import { data } from './data/student'

//JSON導入自動轉成js資料類型
//import jsonData form './data/student.json'

function StudentList() {
  const list = data.map((e, i) => {
    const { id, name } = e
    //key值的選擇
    //1.資料來自資料庫,優先使用資料庫中的key(主鍵/外鍵)當key值
    //2.資料並非來自資料庫,可在資料初始化時使用uuid或nanoid等函式庫產生key值,注意不要寫在return中
    //3.資料為靜態資料(意指在應用程式中完全不會更動)時,才能使用索引值當key值
    return <li key={id}>{name}</li>
  })

  return (
    <>
      <h2>學生資料清單</h2>
      <ul>{list}</ul>
    </>
  )
}

export default StudentList
