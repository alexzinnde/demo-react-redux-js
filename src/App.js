import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, increaseByAmount} from './reducers/counter'
import './app.css'

const App = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const [incAmount, setIncAmount] = useState(0)

  return (
    <div id='container'>
      <div>Counter: {counter}</div>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <div>
        <label htmlFor='amount-input'>Enter Amount:</label>
        <input
          id='amount-input'
          name='amount-input'
          type='number'
          value={incAmount}
          onChange={(e) => setIncAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(increaseByAmount(incAmount))}>
          Update by ampuont
        </button>
      </div>
    </div>
  )
}

export default App
