import UserList from "./components/UserList"
import UseInput from "./components/UseInput"
import { useEffect, useState } from "react"
import { v4 as uid } from "uuid"
function App() {
  const [userList, setUserList] = useState([])

  const handleAdd = (text, email) => {
    setUserList([
      ...userList,
      {
        text,
        email,
        id: uid(),
      },
    ])
  }

  const loadData = async () => {
    const userList = await JSON.parse(localStorage.getItem("userList"))
    setUserList(userList)
  }
  /* loads the cached data */
  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList))
  }, [userList])
  return (
    <div>
      <UseInput addUser={handleAdd} />
      <UserList user={userList} />
    </div>
  )
}
export default App
