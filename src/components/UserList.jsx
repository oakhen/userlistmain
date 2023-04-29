import { FaTrashAlt } from "react-icons/fa"
import { AiOutlineEdit } from "react-icons/ai"
import { useState } from "react"

function UserList({ user, deleteUser, edit }) {
  const [loadeduser, setloadeduser] = useState([])
  const [currentIndex, setcurrentIndex] = useState(0)

  const loadMore = () => {
    const itemsToLoad = user.slice(currentIndex, currentIndex + 3)
    setloadeduser([...loadeduser, ...itemsToLoad])
    setcurrentIndex(currentIndex + 3)
  }

  // useEffect(() => {
  //   loadMore()
  // }, [])

  return (
    <div className="card">
      <h1>User Details</h1>
      <ul>
        {loadeduser.map((list) => (
          <li key={list.id}>
            <p className="details"> {list.text}</p>
            <p className="details">{list.email}</p>
            <button
              className="icon"
              onClick={() => {
                edit(list.id)
              }}
            >
              {/* <FaEdit color="black" size={20} /> */}
              <AiOutlineEdit color="black" size={20} />
            </button>
            <button
              className="icon"
              onClick={() => {
                deleteUser(list.id)
              }}
            >
              <FaTrashAlt color="red" />
            </button>
          </li>
        ))}
      </ul>
      <button
        className="btn"
        onClick={() => {
          loadMore()
        }}
      >
        load more
      </button>
    </div>
  )
}
export default UserList
