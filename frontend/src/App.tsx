import './App.css'
import { MainContainer } from './Components/MainContainer';
import { Input } from "./Components/Input";
import { Button } from './Components/Button';
import { ExitButton } from './Components/ExitButton';
import { RoomId } from './Components/RoomId';
import { useEffect, useRef, useState } from 'react';

function App() {

  const wsRef = useRef<WebSocket>();
  const [messages, setMessages] = useState<string[]>(["hi there", "hello"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const roomId = useRef();

  function sendMessage() {
    const input = inputRef.current?.value;

    wsRef.current?.send(JSON.stringify({
      type: "chat",
      payload: {
        message: input
      }
    }))

    if (inputRef.current) {
      inputRef.current.value = "";
    }

  }

  function exitRoom() {
    wsRef.current?.send(JSON.stringify({
      type: "exit",
      payload: {
        roomId: roomId
      }
    }))
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    wsRef.current = ws;

    ws.onmessage = (event) => {
      setMessages(m => [...m, event.data])
    }

    ws.onopen = () => {
      ws.send(JSON.stringify({
        type: "join",
        payload: {
          roomId: "red"
        }
      }))
    }

    return () => {
      ws.close();
    }
  }, [])

  return <div className='h-screen flex justify-center items-center bg-[#03061C] '>
    <div className='h-[550px] w-96 bg-[#1D1D3B] rounded-2xl border p-3'>
      <div className='h-[10%] mb-3 flex'>
        <Button onClick={exitRoom} text={<ExitButton/>} mr={3} ></Button>
        <RoomId roomId={roomId.toString()} />
      </div>
      <div className='h-[76.2%] mb-3 '>
        <MainContainer messages={messages} />
      </div>
      <div className='flex h-[9%] '>
        <Input inputRef={inputRef}/>
        <Button onClick={sendMessage} text={"Send"} />
      </div>
    </div>
  </div>
}

export default App

