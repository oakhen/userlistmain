import { FaEdit, FaTrash } from "react-icons/fa"
function UserList({ user }) {
  return (
    <div>
      <p>userList</p>
      <ul>
        {user.map((list) => (
          <li key={list.id}>
            Name : {list.text} Email: {list.email}
            <button>
              <FaEdit color="black" />
            </button>
            <button>
              <FaTrash color="red" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default UserList
