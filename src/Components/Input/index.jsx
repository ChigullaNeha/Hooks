// USE REF
import { useEffect, useRef } from "react"
const Input = () => {
  const data = useRef(null);
  const sumbitHandler = e => {
    e.preventDefault();
    console.log(data.current.value);
  }
  useEffect(() => {
    data.current.focus();
  }, [])
  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <input type="text" ref={data} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Input
