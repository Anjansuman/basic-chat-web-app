import React from "react";

interface InputProps {
    inputRef: React.RefObject<HTMLInputElement>;
}

export const Input = ({ inputRef }: InputProps) => {
    return <div className="h-full w-[70%] bg-[#653AD847] p-0.5 rounded-xl mr-3 shadow-2xl">
        <input ref={inputRef} type="text" className="h-[100%] w-full bg-[#653AD847] flex items-center text-white rounded-xl p-3 shadow-2xl " placeholder="Type a message..."/>
    </div>
}