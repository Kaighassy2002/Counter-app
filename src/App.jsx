
import './App.css'
import ComponetApp from './component/ComponetApp'


function App() {
 
  return (
    <>
   <div style={{height:'100vh'}} className='bg-dark' >
      <h1 className='text-center text-white p-5'>Counter App</h1>
      <div> <ComponetApp/></div>
   </div>
    </>
  )
}

export default App
