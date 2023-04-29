import { FaEdit, FaTrash } from "react-icons/fa"
function UserList({ user, deleteUser, edit }) {
  return (
    <div>
      <p>userList</p>
      <ul>
        {user.map((list) => (
          <li key={list.id}>
            Name : {list.text} Email: {list.email}
            <button
              onClick={() => {
                edit(list.id)
              }}
            >
              <FaEdit color="black" />
            </button>
            <button
              onClick={() => {
                deleteUser(list.id)
              }}
            >
              <FaTrash color="red" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default UserList
