// USE MEMO
import { useMemo, useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(5);

  const fact = () => {
    let ans = 1;
    for(let i = number; i >= 1; i --) {
        ans = ans * i;
    }
    console.log("Factorial function calling...")
    return ans;
  }
  const Factorial = useMemo(() => {fact(number)}, [number]);

  return (
    <div>
      <center>
        Factorial: {Factorial}<br />
        <button type="button" onClick={() => setCounter(counter + 1)}>Counter Increment</button>
        <br />
        <button type="button" onClick={() => setNumber(number + 1)}>number Increment</button>
        <br />
        counter: {counter}
      </center>
    </div>
  )
}
export default Counter
