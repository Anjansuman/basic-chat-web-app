import './App.css'
import { MainContainer } from './Components/MainContainer';
import { Input } from "./Components/Input";
import { Button } from './Components/Button';

function App() {

  return <div className='h-screen flex justify-center items-center bg-[#03061C] '>
    <div className='h-[500px] w-96 bg-[#1D1D3B] rounded-2xl border p-3'>
      <div className='h-[86%] mb-3 '>
        <MainContainer/>
      </div>
      <div className='flex h-[11.7%] '>
        <Input/>
        <Button/>
      </div>
    </div>
  </div>
}

export default App
