import React from "react";

interface InputProps {
    inputRef?: React.RefObject<HTMLInputElement>;
    onEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    placeholder: string;
    width?: string;
    bgc?: string;
}

export const Input = ({ inputRef, onEnter, placeholder, bgc }: InputProps) => {
    return <div className={`h-full w-[100%] p-0.5 rounded-xl mr-3 shadow-2xl`}
        style={{backgroundColor: bgc || "#653AD847"}}
    >
        <input onKeyDown={onEnter} ref={inputRef} type="text" className="h-[100%] w-full flex items-center text-white rounded-xl p-3 shadow-2xl "
            style={{backgroundColor: bgc || "#653AD847"}}
            placeholder={placeholder}
        />
    </div>
}