import { useState, useEffect } from 'react'
import axios from 'axios'

function User() {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )
    console.log(response)
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <h1>會員資料</h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
          </tr>
        </thead>
        <tbody>
          {users.map((e, i) => {
            const { id, name } = e
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default User
