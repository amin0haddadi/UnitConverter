import React, { useState } from 'react'
import Select from './components/Select'
import Input from './components/Input'
import { units } from './units'

function App() {
  const [result, setResult] = useState(0)
  const[inputval,setinputval]=useState(0)
  const[fromVahed,setfromvahed]=useState(1)
  const[toVahed,settovahed]=useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setResult((inputval * fromVahed) / toVahed) 
  }
  const handleinput=(e)=>{
    setinputval(e.target.value)
  }
  const handlefrom=(e)=>{
    setfromvahed(e.target.value)
  }
  const handleto=(e)=>{
    settovahed(e.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="converter-form">
        <Input label={'Amount'} onChange={handleinput}></Input>

        <div className="row">
          <Select label={'From'} items={units} onChange={handlefrom}></Select>
          <Select label={'To'} items={units} onChange={handleto}></Select>

          <button type='submit'>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </form>
  )
}

export default App
