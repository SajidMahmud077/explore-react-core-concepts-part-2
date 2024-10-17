import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'


function App() {
  function handleClick(){
    alert('Button Click');
  }

  const handleClick2=()=>{
    alert('click Button 2')
  }
  const addToFive=(num)=>{
    alert(num+5);
  }



  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=>{alert('third Clicked')}}>Click 3</button>
      <button onClick={()=>addToFive(5)}>Four</button>

    
    </>
  )
}

export default App
