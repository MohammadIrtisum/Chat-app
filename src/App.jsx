


import { Button } from './components/Button'
import './Style.css'

function App() {
  

  return (
    <div className="m-20 space-y-4">
        {/* <h1 className="text-red-500">
          Sign In
        </h1> */}

        {/* <Button veriant="outline" >Learn more</Button> */}
        <Button onClick={()=>alert("hello world")}>Sing up</Button>
        <Button >Sing in</Button>
        <Button variant='outline' className="m-20 "  >Learn more</Button>
        
    </div>
  )
}

export default App