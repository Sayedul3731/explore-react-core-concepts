import './App.css'
import Counter from './counter'
import Player from './player'
import Users from './Users'
import Friends from './Friends'


function App() {
  const handleBtn = () => {
    alert('clicked btn')
  }
  const addFive = (num) => {
    alert(num + 3)
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Player></Player>
      <Counter></Counter>
      <button onClick={handleBtn}>Click Me</button>
      <button onClick={ () => alert('clicked btn 2')}>Click 2</button>
      <button onClick={ () => addFive(2)}>Click 3</button>
    </>
  )
}

export default App
