import UserList from "./components/UserList"
import UseInput from "./components/UseInput"
import { useEffect, useState } from "react"
import { v4 as uid } from "uuid"
function App() {
  const [userList, setUserList] = useState([])
  const [update, setUpdate] = useState({
    edit: false,
    user: {},
  })

  const handleEdit = (id) => {
    const user = userList.find((list) => list.id === id)
    setUpdate({
      edit: true,
      user: user,
    })

    console.log(update)
  }

  const handleUpdate = (id, text, email) => {
    const updatedList = userList.map((list) =>
      list.id === id ? { ...list, text, email } : list,
    )
    console.log(updatedList)
    setUserList(updatedList)
    setUpdate({ edit: false, user: {} })
  }

  const handleDelete = (id) => {
    const confirmBox = window.confirm("Do you Really want to delete this user?")
    if (confirmBox) {
      setUserList(userList.filter((user) => user.id !== id))
    }
  }

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
    <div className="main">
      <UseInput addUser={handleAdd} update={update} updatUser={handleUpdate} />
      <UserList user={userList} deleteUser={handleDelete} edit={handleEdit} />
    </div>
  )
}
export default App
