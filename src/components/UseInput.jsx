import { useEffect, useState } from "react"

import { FaCheck } from "react-icons/fa"
// import { v4 as uid } from "uuid"

function UseInput({ addUser, updatUser, update }) {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState({
    display: false,
    msg: "",
  })

  const messages = (msg) => {
    setMsg({
      display: true,
      msg: msg,
    })
    setTimeout(() => {
      setMsg({ display: false })
    }, 2000)
  }

  useEffect(() => {
    if (update.edit) {
      setText(update.user.text)
      setEmail(update.user.email)
    }
  }, [update])

  return (
    <div className="card">
      <h1>Enter User Details</h1>
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
            messages("User details have been updated")
          } else {
            addUser(text, email)
            setText("")
            setEmail("")
            messages("User details have been saved!")
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

        <button className="btn" type="submit">
          submit
        </button>
        <button
          className="btn"
          onClick={() => {
            setText("")
            setEmail("")
          }}
          type="reset"
        >
          reset
        </button>
      </form>

      {msg.display && (
        <p
          style={{
            color: "green",
          }}
        >
          <FaCheck color="green" /> {msg.msg}
        </p>
      )}
    </div>
  )
}
export default UseInput
