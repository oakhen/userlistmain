import { useEffect, useState } from "react"
// import { v4 as uid } from "uuid"

function UseInput({ addUser, updatUser, update }) {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    if (update.edit) {
      setText(update.user.text)
      setEmail(update.user.email)
    }
  }, [update])
  return (
    <div className="card">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (text.trim() === "") {
            alert("please input some thing")
          }
          if (update.edit) {
            updatUser(update.user.id, text, email)
            setText("")
            setEmail("")
          } else {
            addUser(text, email)
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
        <button
          onClick={() => {
            setText("")
            setEmail("")
          }}
          type="reset"
        >
          reset
        </button>
      </form>
    </div>
  )
}
export default UseInput
