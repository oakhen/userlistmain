import { useEffect, useState } from "react"
// import { v4 as uid } from "uuid"

function UseInput({ addUser, updatUser }) {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")

  return (
    <div className="card">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (text.trim() === "") {
            alert("please input some thing")
          } else {
            addUser(text, email)
            // setUserList([
            //   ...userList,
            //   {
            //     text,
            //     email,
            //     id: uid(),
            //   },
            // ])

            setText("")
            setEmail("")
          }
        }}
      >
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={text}
            name="name"
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>

        <button type="submit">submit</button>
        <button type="reset">reset</button>
      </form>
    </div>
  )
}
export default UseInput
