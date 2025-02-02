import { useState } from "react"

export default function App(){
  return <div>
    <Hello/>
  </div>
}


function Hello(){
  const [count,setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);
  console.log("Date is "+ date);

  return <div>
    <div>
      <button onClick={() => setStep(step - 1)}>-</button>
      <span>Step is : {step}</span>
      <button onClick={() => setStep(step + 1)}>+</button>
    </div>
    <div>
      <button onClick={() => setCount(count - step)}>-</button>
      <span>Count is : {count}</span>
      <button onClick={() => setCount(count + step)}>+</button>
    </div>
    <div>
      <span> {count === 0 ? "Today is " : count > 0 ? `${count} days from Today is ` : `${count} days ago is `}</span> {date.toDateString()}
    </div>

  </div>
}